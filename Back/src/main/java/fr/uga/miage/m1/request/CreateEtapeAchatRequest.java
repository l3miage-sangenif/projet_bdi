package fr.uga.miage.m1.request;

import jakarta.transaction.TransactionScoped;
import jakarta.transaction.Transactional;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateEtapeAchatRequest {

    private int idTrajet;

    private int nbPlace;
    
}
