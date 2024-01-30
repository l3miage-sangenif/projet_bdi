package fr.uga.miage.m1.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Region")
public class RegionEntity {
    @Id
    @Column(name = "nomRegion")
    private String nomRegion;

    public RegionEntity(){}

}
