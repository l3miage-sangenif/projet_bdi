package fr.uga.miage.m1.entities;


import jakarta.persistence.DiscriminatorColumn;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Inheritance;
import jakarta.persistence.InheritanceType;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Getter
@Setter
@Data
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "TYPE",length = 12)
@NoArgsConstructor @AllArgsConstructor
public class Utilisateur {
    
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userUid;

    private String nom;

    private String prenom;

    private String numTelephone;

    private String email;

    private Conducteur conducteur;

    private Organisateur organisateur;

    private String mdp;

}
