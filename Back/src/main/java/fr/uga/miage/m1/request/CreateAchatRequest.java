package fr.uga.miage.m1.request;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateAchatRequest {
    
    private List<CreateEtapeAchatRequest> etape;
}
