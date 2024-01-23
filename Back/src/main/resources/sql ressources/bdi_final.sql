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

ALTER DATABASE CHARACTER SET UTF8;


CREATE TABLE Domaine (
    nom_domaine VARCHAR2(255) PRIMARY KEY
);

CREATE TABLE SousDomaine (
    nom_sous_domaine VARCHAR2(255) PRIMARY KEY,
    nom_domaine VARCHAR2(255),
    FOREIGN KEY (nom_domaine) REFERENCES Domaine(nom_domaine)
);

CREATE TABLE Region (
    nom_region VARCHAR2(255) PRIMARY KEY
);

CREATE TABLE Departement (
    num_departement NUMBER PRIMARY KEY,
    nom_departement VARCHAR2(255),
    nom_region VARCHAR2(255),
    FOREIGN KEY (nom_region) REFERENCES Region(nom_region)
);

CREATE TABLE Commune (
    codeiNSEE VARCHAR(255) PRIMARY KEY,
    nom_commune VARCHAR2(255),
    codePostal VARCHAR2(20),
    num_departement NUMBER,
    FOREIGN KEY (num_departement) REFERENCES Departement(num_departement)
);

CREATE TABLE Utilisateur (
    userUid VARCHAR2(255) PRIMARY KEY,
    nom VARCHAR2(255),
    prenom VARCHAR2(255),
    numTelephone VARCHAR2(20),
    email VARCHAR2(255),
    typeUtilisateur VARCHAR(10) CHECK (typeUtilisateur IN ('Festivalier', 'Conducteur', 'Organisateur'))
    mdp VARCHAR2(255)
);

CREATE TABLE LieuCovoiturage (
    idLieu VARCHAR2(255) PRIMARY KEY,
    nomLieu VARCHAR2(255),
    typeLieu VARCHAR2(255),
    adresseLieu VARCHAR2(255),
    longitude NUMBER(25, 20),
    latitude NUMBER(25, 20),
    i VARCHAR(255),
    FOREIGN KEY (i) REFERENCES Commune(i)
);

CREATE TABLE Festival (
    idFestival NUMBER PRIMARY KEY,
    nomManifestation VARCHAR2(255),
    dateDebut DATE,
    dateFin DATE,
    siteWeb VARCHAR2(255),
    nbPlace NUMBER,
    tarif NUMBER(10, 2),
    nbPlaceRestante NUMBER,
    nom_sous_domaine VARCHAR2(255),
    i VARCHAR(255)
    FOREIGN KEY (nom_sous_domaine) REFERENCES Sous_domaine(nom_sous_domaine),
    FOREIGN KEY (i) REFERENCES Commune(i)
);

CREATE TABLE Achat (
    numAchat NUMBER PRIMARY KEY,
    nbPlace NUMBER,
    achatValidee NUMBER(1, 0)
);

CREATE TABLE OffreCovoiturage (
    idOffreCovoiturage NUMBER PRIMARY KEY,
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