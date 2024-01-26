package fr.uga.miage.m1.models;


import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="typeUtilisateur")
@DiscriminatorValue("Festivalier")
@Table(name = "Utilisateur")
public class UtilisateurEntity {

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

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "utilisateur", cascade = CascadeType.ALL)
    private List<AchatEntity> achats;

    public UtilisateurEntity() {
        this.achats = new ArrayList<AchatEntity>();
    }
}
