package fr.uga.miage.m1.models;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "EtapeAchat")
public class EtapeAchatEntity {

    @EmbeddedId
    private EtapeAchatIdEntity id;

    @ManyToOne
    @MapsId("numAchat")
    @JoinColumn(name = "numAchat", referencedColumnName = "numAchat")
    private AchatEntity achat;

    @ManyToOne
    @MapsId("idtrajet")
    @JoinColumn(name = "idtrajet", referencedColumnName = "idtrajet")
    private EtapeEntity etape;

    @Column(name = "nbPlace")
    private int nbPlace;

    public EtapeAchatEntity() {
        this.id = new EtapeAchatIdEntity();
    }

    public EtapeAchatEntity(AchatEntity achat, EtapeEntity etape, int nbPlace) {
        this.id = new EtapeAchatIdEntity(achat.getNumAchat(), etape.getIdtrajet());
        this.achat = achat;
        this.etape = etape;
        this.nbPlace = nbPlace;
    }
}