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
@Table(name = "Departement")

public class Departement {
    @Id
    @Column(name = "numDepartement")
    private long numDepartement;

    @Column(name = "nomDepartement")
    private String nomDepartement;

    @JoinColumn(name = "nomRegion", referencedColumnName ="nomRegion")
    private Region Region;

    public Departement (){

    }
    public Departement(long numDepartement, String nomDepartement, Region nomRegion){
        this.numDepartement=numDepartement;
        this.nomDepartement=nomDepartement;
        this.Region=nomRegion;
    }
   
    
}
