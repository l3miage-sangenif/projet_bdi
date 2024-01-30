package fr.uga.miage.m1.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Domaine")
public class DomaineEntity {
    @Id
    @Column(name = "nomDomaine")
    private String nomDomaine;
    
    public DomaineEntity(){}
}