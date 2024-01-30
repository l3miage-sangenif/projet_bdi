package fr.uga.miage.m1.Entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Entity
@Table(name = "FestivalOrganisateur")
public class FestivalOrganisateur {

    @EmbeddedId
    private FestivalOrganisateurId id;

    @ManyToOne
    @MapsId("idFestival")
    @JoinColumn(name = "idFestival", referencedColumnName = "idFestival")
    private Festival festival;

    @ManyToOne
    @MapsId("userUid")
    @JoinColumn(name = "userUid", referencedColumnName = "userUid")
    private Utilisateur organisateur;

    public FestivalOrganisateur() {
        this.id = new FestivalOrganisateurId();
    }

    public FestivalOrganisateur(Festival festival, Utilisateur organisateur) {
        this.id = new FestivalOrganisateurId(festival.getIdFestival(), organisateur.getUserUid());
        this.festival = festival;
        this.organisateur = organisateur;
    }

}