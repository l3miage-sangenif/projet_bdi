package fr.uga.miage.m1.model;

import java.io.Serializable;

import jakarta.persistence.*;

@Embeddable
public class FestivalOrganisateurId implements Serializable {

    @Column(name = "idFestival")
    private Long idFestival;

    @Column(name = "userUid")
    private String userUid;

    public FestivalOrganisateurId() {
    }

    public FestivalOrganisateurId(Long idFestival, String userUid) {
        this.idFestival = idFestival;
        this.userUid = userUid;
    }
}