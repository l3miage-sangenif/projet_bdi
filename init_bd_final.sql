DROP TABLE FestivalOrganisateur CASCADE CONSTRAINTS;
DROP TABLE AchatUtilisateur CASCADE CONSTRAINTS;
DROP TABLE EtapeAchat CASCADE CONSTRAINTS;
DROP TABLE Etape CASCADE CONSTRAINTS;
DROP TABLE OffreCovoiturage CASCADE CONSTRAINTS;
DROP TABLE Achat CASCADE CONSTRAINTS;
DROP TABLE Festival CASCADE CONSTRAINTS;
DROP TABLE LieuCovoiturage CASCADE CONSTRAINTS;
DROP TABLE Utilisateur CASCADE CONSTRAINTS;
DROP TABLE Commune CASCADE CONSTRAINTS;
DROP TABLE Departement CASCADE CONSTRAINTS;
DROP TABLE Region CASCADE CONSTRAINTS;
DROP TABLE Sous_domaine CASCADE CONSTRAINTS;
DROP TABLE Domaine CASCADE CONSTRAINTS;

CREATE TABLE Domaine (
    nomDomaine VARCHAR2(255) PRIMARY KEY
);

CREATE TABLE Sous_domaine (
    nomSousDomaine VARCHAR2(255) PRIMARY KEY,
    nomDomaine VARCHAR2(255),
    FOREIGN KEY (nomDomaine) REFERENCES Domaine(nomDomaine)
);

CREATE TABLE Region (
    nomRegion VARCHAR2(255) PRIMARY KEY
);

CREATE TABLE Departement (
    numDepartement NUMBER PRIMARY KEY,
    nomDepartement VARCHAR2(255),
    nomRegion VARCHAR2(255),
    FOREIGN KEY (nomRegion) REFERENCES Region(nomRegion)
);

CREATE TABLE Commune (
    codeINSEE VARCHAR2(255) PRIMARY KEY,
    nomCommune VARCHAR2(255),
    codePostal VARCHAR2(20),
    lieuPrincipal VARCHAR2(255),
    numDepartement NUMBER,
    FOREIGN KEY (numDepartement) REFERENCES Departement(numDepartement)
);

CREATE TABLE Utilisateur (
    userUid VARCHAR2(255) PRIMARY KEY,
    nom VARCHAR2(255),
    prenom VARCHAR2(255),
    numTelephone VARCHAR2(20),
    email VARCHAR2(255),
    conducteur NUMBER(1,0),
    organisateur NUMBER(1,0),
    mdp VARCHAR2(255)
);

CREATE TABLE LieuCovoiturage (
    idLieu NUMBER PRIMARY KEY,
    nomLieu VARCHAR2(255),
    typeLieu VARCHAR2(255),
    adresseLieu VARCHAR2(255),
    longitude NUMBER(25, 20),
    latitude NUMBER(25, 20),
    codeINSEE VARCHAR2(255),
    FOREIGN KEY (codeINSEE) REFERENCES Commune(codeINSEE)
);

CREATE TABLE Festival (
    idFestival NUMBER PRIMARY KEY,
    nomManifestation VARCHAR2(255),
    dateDebut DATE,
    dateFin DATE,
    siteWeb VARCHAR2(255),
    nbPlace NUMBER,
    tarif NUMBER(10, 2),
    nbPass NUMBER,
    nomSousDomaine VARCHAR2(255),
    codeINSEE VARCHAR2(255),
    nbPlaceRestante NUMBER,
    FOREIGN KEY (nomSousDomaine) REFERENCES Sous_domaine(nomSousDomaine),
    FOREIGN KEY (codeINSEE) REFERENCES Commune(codeINSEE)
);

CREATE TABLE Achat (
    numAchat NUMBER PRIMARY KEY,
    nbPlace NUMBER,
    achatValidee NUMBER(1, 0)
);

CREATE TABLE OffreCovoiturage (
    idConducteur NUMBER PRIMARY KEY,
    nbPlace NUMBER,
    numImmatriculation VARCHAR2(20),
    modele VARCHAR2(255),
    couleur VARCHAR2(255),
    userUid VARCHAR2(255),
    idFestival NUMBER,
    FOREIGN KEY (userUid) REFERENCES Utilisateur(userUid),
    FOREIGN KEY (idFestival) REFERENCES Festival(idFestival)
);

CREATE TABLE Etape (
    idtrajet NUMBER PRIMARY KEY,
    prix NUMBER(10, 2),
    heure TIMESTAMP,
    idConducteur NUMBER,
    idLieu NUMBER,
    FOREIGN KEY (idConducteur) REFERENCES OffreCovoiturage(idConducteur),
    FOREIGN KEY (idLieu) REFERENCES LieuCovoiturage(idLieu)
);

CREATE TABLE AchatUtilisateur (
    userUid VARCHAR2(255),
    numAchat NUMBER,
    PRIMARY KEY (userUid, numAchat),
    FOREIGN KEY (userUid) REFERENCES Utilisateur(userUid),
    FOREIGN KEY (numAchat) REFERENCES Achat(numAchat)
);

CREATE TABLE EtapeAchat (
    numAchat NUMBER,
    idtrajet NUMBER,
    nbPlace NUMBER,
    PRIMARY KEY (numAchat, idtrajet),
    FOREIGN KEY (numAchat) REFERENCES Achat(numAchat),
    FOREIGN KEY (idtrajet) REFERENCES Etape(idtrajet)
);

CREATE TABLE FestivalOrganisateur (
    idFestival NUMBER,
    userUid VARCHAR2(255),
    PRIMARY KEY (userUid, idFestival),
    FOREIGN KEY (userUid) REFERENCES Utilisateur(userUid),
    FOREIGN KEY (idFestival) REFERENCES Festival(idFestival)
);

