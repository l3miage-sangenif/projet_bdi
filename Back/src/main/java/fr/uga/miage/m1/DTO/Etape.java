package fr.uga.miage.m1.DTO;

import java.time.Instant;

import fr.uga.miage.m1.models.LieuCovoiturageEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Etape {

    long idtrajet;

    float prix;

    Instant heure;

    LieuCovoiturageEntity lieuCovoiturage;
    
}
