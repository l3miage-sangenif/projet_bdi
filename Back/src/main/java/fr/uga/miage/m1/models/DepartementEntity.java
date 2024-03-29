package fr.uga.miage.m1.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Departement")
public class DepartementEntity {
    @Id
    @Column(name = "numDepartement")
    private long numDepartement;

    @Column(name = "nomDepartement")
    private String nomDepartement;

    @ManyToOne
    @JoinColumn(name = "nomRegion", referencedColumnName ="nomRegion")
    private RegionEntity region;

    public DepartementEntity (){}
  
}
