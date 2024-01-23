package fr.uga.miage.m1.model;

import java.io.Serializable;

import jakarta.persistence.*;

@Embeddable
public class EtapeAchatId implements Serializable {

    @Column(name = "numAchat")
    private long numAchat;

    @Column(name = "idtrajet")
    private long idtrajet;

    public EtapeAchatId() {
    }

    public EtapeAchatId(Long numAchat, Long idtrajet) {
        this.numAchat = numAchat;
        this.idtrajet = idtrajet;
    }
}