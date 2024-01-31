package fr.uga.miage.m1.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class CreateUserRequest {

    private String userUid;

    private String nom;

    private String prenom;

    private String numTelephone;

    private String email;
    
}
