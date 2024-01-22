package fr.uga.miage.m1.Entities;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "EtapeAchat")
public class EtapeAchat {

    @EmbeddedId
    private EtapeAchatId id;

    @ManyToOne
    @MapsId("numAchat")
    @JoinColumn(name = "numAchat", referencedColumnName = "numAchat")
    private Achat achat;

    @ManyToOne
    @MapsId("idtrajet")
    @JoinColumn(name = "idtrajet", referencedColumnName = "idtrajet")
    private Etape etape;

    @Column(name = "nbPlace")
    private int nbPlace;

    public EtapeAchat() {
        this.id = new EtapeAchatId();
    }

    public EtapeAchat(Achat achat, Etape etape, int nbPlace) {
        this.id = new EtapeAchatId(achat.getNumAchat(), etape.getIdtrajet());
        this.achat = achat;
        this.etape = etape;
        this.nbPlace = nbPlace;
    }

}
