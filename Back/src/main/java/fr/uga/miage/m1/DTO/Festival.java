package fr.uga.miage.m1.DTO;

import java.math.BigDecimal;
import java.sql.Date;

import fr.uga.miage.m1.models.CommuneEntity;
import fr.uga.miage.m1.models.SousDomaineEntity;
import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Festival {

    long idFestival;

    String nomManifestation;

    Date dateDebut;

    Date dateFin;

    String siteWeb;

    int nbPlace;

    BigDecimal tarif;

    int nbPlaceRestante;

    BigDecimal longitude;

    BigDecimal latitude;

    SousDomaineEntity sousDomaine;

    CommuneEntity commune;
    
}
