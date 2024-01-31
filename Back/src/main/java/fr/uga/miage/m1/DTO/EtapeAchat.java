package fr.uga.miage.m1.DTO;

import java.math.BigDecimal;
import java.security.Timestamp;
import java.time.Instant;

import fr.uga.miage.m1.models.EtapeEntity;
import fr.uga.miage.m1.models.LieuCovoiturageEntity;
import fr.uga.miage.m1.models.OffreCovoiturageEntity;
import jakarta.persistence.Column;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EtapeAchat {

    EtapeWithOffre etape;

    int nbPlace;
    
}
