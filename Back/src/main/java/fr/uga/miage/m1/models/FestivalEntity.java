package fr.uga.miage.m1.models;

import java.math.BigDecimal;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "Festival")
public class FestivalEntity{
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

    @Column(name="tarif")
    private double tarif;

    @Column(name="nbPlaceRestante")
    private int nbPlaceRestante;

    @Column(name = "longitude", precision = 25, scale = 20)
    private BigDecimal longitude;

    @Column(name = "latitude", precision = 25, scale = 20)
    private BigDecimal latitude;

    @ManyToOne
    @JoinColumn(name = "nomSousDomaine", referencedColumnName = "nomSousDomaine")
    private SousDomaineEntity sousDomaine;

    @ManyToOne
    @JoinColumn(name = "codeINSEE", referencedColumnName = "codeINSEE")
    private CommuneEntity commune;

    @ManyToMany(mappedBy = "festivals")
    private List<OrganisateurEntity> organisateurs;

    public FestivalEntity(){
    }

}