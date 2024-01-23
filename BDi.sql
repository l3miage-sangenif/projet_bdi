DROP TABLE Festival CASCADE CONSTRAINTS;
DROP TABLE commune CASCADE CONSTRAINTS;

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
    nbPlacerestants NUMBER,
    codeINSEE VARCHAR2(20),
    FOREIGN KEY (nomSousDomaine) REFERENCES Sous_domaine(nomSousDomaine),
    FOREIGN KEY (codeINSEE) REFERENCES Commune(codeINSEE)
);
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

CREATE TABLE Departements (
    numDepartement NUMBER PRIMARY KEY,
    nomDepartement VARCHAR2(255),
    nomRegion VARCHAR2(255),
    FOREIGN KEY (nomRegion) REFERENCES Region(nomRegion)
);

CREATE TABLE Commune (
    codeINSEE VARCHAR2(20) PRIMARY KEY,
    nomCommune VARCHAR2(255),
    codePostal VARCHAR2(20),
    lieuPrincipal VARCHAR2(255),
    numDepartement NUMBER,
    FOREIGN KEY (numDepartement) REFERENCES Departements(numDepartement)
);

