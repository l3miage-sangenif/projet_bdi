package fr.uga.miage.m1.dto;

import java.time.Instant;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import fr.uga.miage.m1.models.LieuCovoiturageEntity;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EtapeWithOffre {

    long idtrajet;

    float prix;

    Instant heure;

    LieuCovoiturageEntity lieuCovoiturage;

    OffreCovoiturageWithoutEtape offreCovoiturage;
    
}
