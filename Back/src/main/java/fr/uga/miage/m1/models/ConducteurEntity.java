package fr.uga.miage.m1.models;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Conducteur")
@DiscriminatorValue("Conducteur")
public class ConducteurEntity extends UtilisateurEntity {
    @Column(name = "mdp")
    private String mdp;

}
