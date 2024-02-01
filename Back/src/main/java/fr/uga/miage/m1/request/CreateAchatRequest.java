package fr.uga.miage.m1.request;

import java.util.List;

import fr.uga.miage.m1.dto.Utilisateur;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateAchatRequest {

    @Builder.Default
    private Boolean achatValidee = false;
    
    private List<CreateEtapeAchatRequest> etape;

    private Utilisateur user;

}
