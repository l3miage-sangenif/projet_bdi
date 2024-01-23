package fr.uga.miage.m1.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "SousDomaine")
public class SousDomaine {
    @Id
    @Column(name = "nomSousDomaine")
    private String nomSousDomaine;

    @ManyToOne
    @JoinColumn(name = "nomDomaine", referencedColumnName = "nomDomaine")
    private Domaine domaine;

    public SousDomaine(){}
}
