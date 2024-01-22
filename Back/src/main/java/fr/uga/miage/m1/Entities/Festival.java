package fr.uga.miage.m1.Entities;

import java.math.BigDecimal;
import java.sql.Date;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Festival")
public class Festival{
    @Id @GeneratedValue(strategy = GenerationType.AUTO)
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

    @Column(name="tarif", precision = 10, scale = 2)
    private BigDecimal tarif;

    @Column(name="nbPass")
    private int nbPass;

    @ManyToOne
    @JoinColumn(name = "nomSousDomaine", referencedColumnName = "nomSousDomaine")
    private SousDomaine sousDomaine;

    @ManyToOne
    @JoinColumn(name = "codeINSEE", referencedColumnName = "codeINSEE")
    private Commune commune;

    @ManyToMany(mappedBy = "festivals")
    private List<Organisateur> organisateurs;

    public Festival(){
        this.organisateurs = new ArrayList<Organisateur>();
    }

}