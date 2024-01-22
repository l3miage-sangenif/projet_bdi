package fr.uga.miage.m1.Entities;

import lombok.*;
import jakarta.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "Conducteur")
@DiscriminatorValue("Conducteur")
public class Conducteur extends Utilisateur {
    @Column(name = "mdp")
    private String mdp;

    public Conducteur(){}
}
