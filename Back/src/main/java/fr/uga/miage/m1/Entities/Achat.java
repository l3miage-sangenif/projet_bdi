package fr.uga.miage.m1.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

@Table(name = "Achat")
public class Achat {
    @Id
    @Column(name = "numAchat")
    private Long numAchat;

    @Column(name = "nbPlace")
    private Long nbPlace;

    @Column(name = "achatValidee")
    private Boolean achatValidee;

    
    public Achat() {
    }

   
    public Achat(Long numAchat, Long nbPlace, Boolean achatValidee) {
        this.numAchat = numAchat;
        this.nbPlace = nbPlace;
        this.achatValidee = achatValidee;
    }
}
