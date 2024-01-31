package fr.uga.miage.m1.DTO;


import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Achat {

    long numAchat;

    
    long nbPlace;

    
    Boolean achatValidee;

    Utilisateur utilisateur;
    
    List<EtapeAchat> etapeAchat;
}
