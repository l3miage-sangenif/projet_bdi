package fr.uga.miage.Entities;

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
    private Long idtrajet;

    @Column(name = "prix", precision = 10, scale = 2)
    private BigDecimal prix;

    @Column(name = "heure")
    private Timestamp heure;

    @JoinColumn(name = "idConducteur", referencedColumnName = "idConducteur")
    private OffreCovoiturage conducteur;

    @JoinColumn(name = "idLieu", referencedColumnName = "idLieu")
    private LieuCovoiturage lieu;


    public Etape() {
    }

    public Etape(Long idtrajet, BigDecimal prix, Timestamp heure, OffreCovoiturage conducteur, LieuCovoiturage lieu) {
        this.idtrajet = idtrajet;
        this.prix = prix;
        this.heure = heure;
        this.conducteur = conducteur;
        this.lieu = lieu;
    }

}
