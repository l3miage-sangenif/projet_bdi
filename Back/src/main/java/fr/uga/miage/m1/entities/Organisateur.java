package fr.uga.miage.m1.entities;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@DiscriminatorValue("Organisateur")
@Data @NoArgsConstructor 
public class Organisateur extends Utilisateur {

}
