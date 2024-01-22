package fr.uga.miage.m1.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
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
    private long numAchat;

    @Column(name = "nbPlace")
    private long nbPlace;

    @Column(name = "achatValidee")
    private Boolean achatValidee;

    @ManyToMany(mappedBy = "achats")
    private List<Utilisateur> utilisateurs;

    public Achat() {
        this.utilisateurs = new ArrayList<Utilisateur>();
    }
}
