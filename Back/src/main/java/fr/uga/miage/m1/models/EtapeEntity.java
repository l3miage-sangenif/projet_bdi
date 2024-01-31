package fr.uga.miage.m1.models;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.time.Instant;
import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "Etape")
@Transactional
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