package fr.uga.miage.m1.entities;


import java.sql.Date;

import jakarta.annotation.Generated;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.IdClass;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
@NoArgsConstructor @AllArgsConstructor
public class AchatUtilisateur {

    private Utilisateur utilisateur;
    
    //@ManyToOne
    //@JoinColumn(name = "numAchat")
    //private Achat numAchat;

    
}
