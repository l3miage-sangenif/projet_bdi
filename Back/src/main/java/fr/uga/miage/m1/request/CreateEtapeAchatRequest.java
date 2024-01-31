package fr.uga.miage.m1.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateEtapeAchatRequest {

    int idTrajet;

    int nbPlace;
    
}
