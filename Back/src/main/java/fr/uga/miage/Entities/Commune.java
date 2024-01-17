package fr.uga.miage.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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

    @JoinColumn(name = "numDepartement", referencedColumnName="numDepartement")
    private Departement Departement;

public Commune(){

}
public Commune(long codeINSEE, String nomCommune, int codePostal, Departement numDepartement){
    this.codeINSEE=codeINSEE;
    this.nomCommune=nomCommune;
    this.codePostal=codePostal;
    this.Departement=numDepartement;
}

}
