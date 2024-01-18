package fr.uga.miage.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Domaine")
public class Domaine{
    @Id
    @Column(name = "nomDomaine")
    private String nomDomaine;
    
    
public Domaine(){

    }

public Domaine( String nomDomaine){
    this.nomDomaine=nomDomaine;
}
}