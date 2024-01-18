package fr.uga.miage.m1.entities;


import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("Conducteur")
@Data @NoArgsConstructor 
public class Conducteur extends Utilisateur{
    
}
