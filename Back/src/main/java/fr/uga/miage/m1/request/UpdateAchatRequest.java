package fr.uga.miage.m1.request;

import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UpdateAchatRequest {
    
    @Builder.Default
    private String userUid = "empty";

    private int nbPlace;

    private List<CreateEtapeAchatRequest> etape;
    
}
