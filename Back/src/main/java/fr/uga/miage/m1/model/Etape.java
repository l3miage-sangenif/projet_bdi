package fr.uga.miage.m1.Entities;

import java.math.BigDecimal;
import java.security.Timestamp;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@Table(name = "Etape")
public class Etape {

    @Id
    @Column(name = "idtrajet")
    private long idtrajet;

    @Column(name = "prix", precision = 10, scale = 2)
    private BigDecimal prix;

    @Column(name = "heure")
    private Timestamp heure;

    @ManyToOne
    @JoinColumn(name = "idConducteur", referencedColumnName = "idConducteur")
    private OffreCovoiturage offreCovoiturage;

    @ManyToOne
    @JoinColumn(name = "idLieu", referencedColumnName = "idLieu")
    private LieuCovoiturage lieuCovoiturage;

    public Etape(){}
}