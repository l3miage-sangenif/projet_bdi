package fr.uga.miage.m1.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "AchatUtilisateur")
public class AchatUtilisateur {

    @EmbeddedId
    private AchatUtilisateurId id;

    @ManyToOne
    @MapsId("userUid")
    @JoinColumn(name = "userUid", referencedColumnName = "userUid")
    private Utilisateur utilisateur;

    @ManyToOne
    @MapsId("numAchat")
    @JoinColumn(name = "numAchat", referencedColumnName = "numAchat")
    private Achat achat;

    public AchatUtilisateur() {
        this.id = new AchatUtilisateurId();
    }

    public AchatUtilisateur(Utilisateur utilisateur, Achat achat) {
        this.id = new AchatUtilisateurId(utilisateur.getUserUid(), achat.getNumAchat());
        this.utilisateur = utilisateur;
        this.achat = achat;
    }
}
 
