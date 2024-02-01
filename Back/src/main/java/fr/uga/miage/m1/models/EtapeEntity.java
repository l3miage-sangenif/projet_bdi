package fr.uga.miage.m1.models;

import java.time.Instant;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "Etape")
public class EtapeEntity {

    @Id
    @Column(name = "idtrajet")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idtrajet;

    @Column(name = "prix")
    private float prix;

    @Column(name = "heure")
    private Instant heure;

    @ManyToOne
    @JoinColumn(name = "idOffreCovoiturage", referencedColumnName = "idOffreCovoiturage")
    private OffreCovoiturageEntity offreCovoiturage;

    @ManyToOne
    @JoinColumn(name = "idLieu", referencedColumnName = "idLieu")
    private LieuCovoiturageEntity lieuCovoiturage;


    public EtapeEntity(){}
}