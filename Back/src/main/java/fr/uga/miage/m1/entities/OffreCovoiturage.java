package fr.uga.miage.m1.entities;


import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@Data
public class OffreCovoiturage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int nbPlace;

    private String numImmatriculation;

    private String modele;

    private String couleur; 

    private Conducteur conducteur;

    private Festivalier festivalier;

    private Festival festival;

    
}
