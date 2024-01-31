package fr.uga.miage.m1.DTO;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Utilisateur {
     String userUid;
     String nom;
     String prenom;
     String numTelephone;
     String email;
}
