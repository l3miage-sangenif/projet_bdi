package fr.uga.miage.m1.models;

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
public class CommuneEntity {
    @Id
    @Column(name = "codeINSEE")
    private String codeINSEE;

    @Column(name = "nomCommune")
    private String nomCommune;

    @Column(name = "codePostal")
    private int codePostal;

    @ManyToOne
    @JoinColumn(name = "numDepartement", referencedColumnName="numDepartement")
    private DepartementEntity departement;

    public CommuneEntity(){}

}
