package fr.uga.miage.m1.DTO;


import java.util.List;

import fr.uga.miage.m1.models.UtilisateurEntity;
import jakarta.persistence.Column;
import jakarta.persistence.ManyToMany;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Achat {

    long numAchat;

    
    long nbPlace;

    
    Boolean achatValidee;


    
}
