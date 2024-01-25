package fr.uga.miage.m1.models;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.util.List;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "Etape")
public class EtapeEntity {

    @Id
    @Column(name = "idtrajet")
    private long idtrajet;

    @Column(name = "prix", precision = 10, scale = 2)
    private BigDecimal prix;

    @Column(name = "heure")
    private Timestamp heure;

    @ManyToOne
    @JoinColumn(name = "idOffreCovoiturage", referencedColumnName = "idOffreCovoiturage")
    private OffreCovoiturageEntity offreCovoiturage;

    @ManyToOne
    @JoinColumn(name = "idLieu", referencedColumnName = "idLieu")
    private LieuCovoiturageEntity lieuCovoiturage;


    public EtapeEntity(){}
}