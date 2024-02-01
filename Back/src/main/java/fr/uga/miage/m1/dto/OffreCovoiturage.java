package fr.uga.miage.m1.dto;

import java.util.List;

import fr.uga.miage.m1.models.ConducteurEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OffreCovoiturage {
    
     long idOffreCovoiturage;

     int nbPlace;

     String numImmatriculation;

     String modele;

     String couleur;

     ConducteurEntity conducteur;

     Festival festival;

     List<Etape> etape;

}
