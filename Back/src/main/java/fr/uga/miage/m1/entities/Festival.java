package fr.uga.miage.m1.entities;

import java.sql.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@Data
@NoArgsConstructor @AllArgsConstructor
public final class Festival{
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idFestival;

    @Column(name="nomManifestation")
    private String nomManifestation;

    @Column(name="dateDebut")
    private Date dateDebut;

    @Column(name="dateFin")
    private Date dateFin;

    @Column(name="siteWeb")
    private String siteWeb;

    @Column(name="nbPlace")
    private int nbPlace;

    @Column(name="tarif")
    private float tarif;

    @Column(name="nbPass")
    private int nbPass;

    //@ManyToOne
    //@JoinColumn(name = "nomSousDomaine")
    //private SousDomaine nomSousDomaine;

    //@ManyToOne
    //@JoinColumn(name = "codeINSEE"
    //private Commune codeINSEE;

}