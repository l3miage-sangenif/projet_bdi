package fr.uga.miage.m1.Entities;

import java.math.BigDecimal;
import java.security.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

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


}