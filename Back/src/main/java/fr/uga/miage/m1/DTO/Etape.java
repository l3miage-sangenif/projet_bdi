package fr.uga.miage.m1.DTO;

import java.math.BigDecimal;
import java.security.Timestamp;

import fr.uga.miage.m1.models.LieuCovoiturageEntity;
import fr.uga.miage.m1.models.OffreCovoiturageEntity;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

public class Etape {

    long idtrajet;

    BigDecimal prix;

    Timestamp heure;

    LieuCovoiturageEntity lieuCovoiturage;
    
}
