package fr.uga.miage.m1.models;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Organisateur")
@DiscriminatorValue("Organisateur")
public class OrganisateurEntity extends UtilisateurEntity {
    @Column(name = "mdp")
    private String mdp;

    @ManyToMany
    @JoinTable(
            name = "FestivalOrganisateur",
            joinColumns = @JoinColumn(name = "userUid"),
            inverseJoinColumns = @JoinColumn(name = "idFestival")
    )
    private List<FestivalEntity> festivals;

    public OrganisateurEntity(){
         this.festivals = new ArrayList<FestivalEntity>();
    }
}
