package fr.uga.miage.m1.Entities;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Organisateur")
@DiscriminatorValue("Organisateur")
public class Organisateur extends Utilisateur {
    @Column(name = "mdp")
    private String mdp;

    @ManyToMany
    @JoinTable(
            name = "FestivalOrganisateur",
            joinColumns = @JoinColumn(name = "userUid"),
            inverseJoinColumns = @JoinColumn(name = "idFestival")
    )
    private List<Festival> festivals;

    public Organisateur(){
         this.festivals = new ArrayList<Festival>();
    }
}
