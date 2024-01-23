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
@Table(name = "Commune")
public class Commune {
    @Id
    @Column(name = "codeINSEE")
    private long codeINSEE;

    @Column(name = "nomCommune")
    private String nomCommune;

    @Column(name = "codePostal")
    private int codePostal;

    @ManyToOne
    @JoinColumn(name = "numDepartement", referencedColumnName="numDepartement")
    private Departement departement;

    public Commune(){}

}
