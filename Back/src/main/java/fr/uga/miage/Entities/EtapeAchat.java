package fr.uga.miage.Entities;
import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "EtapeAchat")
@IdClass(EtapeAchatId.class)
public class EtapeAchat {
    @Id
    @Column(name = "numAchat")
    private Long numAchat;

    @Id
    @Column(name = "idtrajet")
    private Long idtrajet;

    @Column(name = "nbPlace")
    private Long nbPlace;

    @JoinColumn(name = "numAchat", referencedColumnName = "numAchat")
    private Achat achat;

    @JoinColumn(name = "idtrajet", referencedColumnName = "idtrajet")
    private Etape etape;


    
    public EtapeAchat() {
    }

    public EtapeAchat(Long numAchat, Long idtrajet, Long nbPlace) {
        this.numAchat = numAchat;
        this.idtrajet = idtrajet;
        this.nbPlace = nbPlace;
    }


   
}
