package fr.uga.miage.m1.DTO;

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
