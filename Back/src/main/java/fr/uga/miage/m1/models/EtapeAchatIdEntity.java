package fr.uga.miage.m1.models;

import java.io.Serializable;

import jakarta.persistence.*;

@Embeddable
public class EtapeAchatIdEntity implements Serializable {

    @Column(name = "numAchat")
    private long numAchat;

    @Column(name = "idtrajet")
    private long idtrajet;

    public EtapeAchatIdEntity() {
    }

    public EtapeAchatIdEntity(Long numAchat, Long idtrajet) {
        this.numAchat = numAchat;
        this.idtrajet = idtrajet;
    }
}
