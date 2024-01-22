package fr.uga.miage.m1.Entities;


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

    @ManyToMany
    @JoinTable(
            name = "AchatUtilisateur",
            joinColumns = @JoinColumn(name = "userUid"),
            inverseJoinColumns = @JoinColumn(name = "numAchat")
    )
    private List<Achat> achats;

    public Utilisateur() {
        this.achats = new ArrayList<Achat>();
    }
}
