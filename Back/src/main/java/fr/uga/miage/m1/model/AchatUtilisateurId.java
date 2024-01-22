package fr.uga.miage.m1.model;

import java.io.Serializable;

import jakarta.persistence.*;

@Embeddable
public class AchatUtilisateurId implements Serializable {

    @Column(name = "userUid")
    private String userUid;

    @Column(name = "numAchat")
    private long numAchat;

    public AchatUtilisateurId() {
    }

    public AchatUtilisateurId(String userUid, Long numAchat) {
        this.userUid = userUid;
        this.numAchat = numAchat;
    }
}
