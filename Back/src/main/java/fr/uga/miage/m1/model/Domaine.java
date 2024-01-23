package fr.uga.miage.m1.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Domaine")
public class Domaine {
    @Id
    @Column(name = "nomDomaine")
    private String nomDomaine;
    
    public Domaine(){}
}