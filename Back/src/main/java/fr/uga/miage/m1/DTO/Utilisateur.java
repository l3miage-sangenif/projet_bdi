package fr.uga.miage.m1.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import fr.uga.miage.m1.models.AchatEntity;

@Data
@Builder
public class Utilisateur {
     String userUid;
     String nom;
     String prenom;
     String numTelephone;
     String email;
}
