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

INSERT INTO OffreCovoiturage VALUES (1,3,'YR-506-GC','Ford Mustang','rouge','11e8bf4d-a2f1-4788-b5eb-b24369d2c0b4',200);
INSERT INTO OffreCovoiturage VALUES (2,4,'YB-123-WQ','Nissan Rogue','bleu','2d565343-c5c2-469c-b4f8-816806758f25',55);
INSERT INTO OffreCovoiturage VALUES (3,2,'SS-701-KP','Chevrolet Silverado','gris','31133182-a5b4-421c-afe8-acf3e9e6cc25',12);
INSERT INTO OffreCovoiturage VALUES (4,1,'891-ZWP-23','Honda Accord','bleu','399e1a2e-33ad-4cfa-9598-1b87c733c0d1',47);
INSERT INTO OffreCovoiturage VALUES (5,2,'599-CMD-63','Audi Q5','rouge','3dd2f609-909b-434a-8b19-f3b17a5c4e7a',200);
INSERT INTO OffreCovoiturage VALUES (6,3,'CS-743-VS','Kia Telluride','noir','4c2ed5f8-44ef-4f90-a97a-8268bbd90d61',109);
INSERT INTO OffreCovoiturage VALUES (7,2,'MY-632-FI','Volkswagen Golf','gris','51254c6e-3810-4599-85fa-6d2a5bb699c1',234);
INSERT INTO OffreCovoiturage VALUES (8,3,'HL-569-UG','Toyota Camry','bleu','5b3776d6-fcd4-4a50-9b34-3839f40d05e3',47);
INSERT INTO OffreCovoiturage VALUES (9,1,'672-YIY-59','Porsche 911','rouge','7413fedf-ad24-4e32-b90f-8edb703219e7',90);
INSERT INTO OffreCovoiturage VALUES (10,3,'977-TYE-63','Jeep Wrangler','jaune','856ed660-91e7-4091-9e5c-782d586125dc',72);




