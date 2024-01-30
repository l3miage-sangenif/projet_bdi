package fr.uga.miage.m1.Entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Utilisateur")
public class Utilisateur {

    @Id
    @Column(name = "userUid")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String userUid;

    @Column(name = "nom")
    private String nom;

    @Column(name = "prenom")
    private String prenom;

    @Column(name = "numTelephone")
    private String numTelephone;

    @Column(name = "email")
    private String email;

    @Column(name = "conducteur")
    private Boolean conducteur;

    @Column(name = "organisateur")
    private Boolean organisateur;

    @Column(name = "mdp")
    private String mdp;

    public Utilisateur() {
    }
}
