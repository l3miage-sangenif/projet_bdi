package fr.uga.miage.m1.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "OffreCovoiturage")
public class OffreCovoiturageEntity {

    @Id
    @Column(name = "idOffreCovoiturage")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idOffreCovoiturage;

    @Column(name = "nbPlace")
    private int nbPlace;

    @Column(name = "numImmatriculation")
    private String numImmatriculation;

    @Column(name = "modele")
    private String modele;

    @Column(name = "couleur")
    private String couleur;

    @ManyToOne
    @JoinColumn(name = "userUid", referencedColumnName = "userUid")
    private UtilisateurEntity utilisateur;

    @ManyToOne
    @JoinColumn(name = "idFestival", referencedColumnName = "idFestival")
    private FestivalEntity festival;

    public OffreCovoiturageEntity() {}
}