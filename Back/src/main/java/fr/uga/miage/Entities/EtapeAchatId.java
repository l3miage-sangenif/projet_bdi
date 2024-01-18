package fr.uga.miage.Entities;

import java.io.Serializable;

public class EtapeAchatId implements Serializable {

    private Long numAchat;
    private Long idtrajet;

    public EtapeAchatId() {
    
    }

    public EtapeAchatId(Long numAchat, Long idtrajet) {
        this.numAchat = numAchat;
        this.idtrajet = idtrajet;
    }
}
