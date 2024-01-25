package fr.uga.miage.m1.DTO;

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
    
    private long idOffreCovoiturage;

    private int nbPlace;

    private String numImmatriculation;

    private String modele;

    private String couleur;

    private ConducteurEntity conducteur;

    private Festival festival;

    private List<Etape> etapes;

}
