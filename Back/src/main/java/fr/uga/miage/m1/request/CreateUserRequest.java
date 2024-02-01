package fr.uga.miage.m1.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CreateUserRequest {

    private String userUid;

    private String nom;

    private String prenom;

    private String numTelephone;

    private String email;
    
}
