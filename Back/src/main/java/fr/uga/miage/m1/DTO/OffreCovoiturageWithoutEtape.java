package fr.uga.miage.m1.DTO;

import fr.uga.miage.m1.models.ConducteurEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OffreCovoiturageWithoutEtape {

    long idOffreCovoiturage;

    int nbPlace;

    String numImmatriculation;

    String modele;
    
    String couleur;

    ConducteurEntity conducteur;

    Festival festival;
    
}
