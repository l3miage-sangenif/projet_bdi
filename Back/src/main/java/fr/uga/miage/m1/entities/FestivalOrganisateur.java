package fr.uga.miage.m1.entities;



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
public class FestivalOrganisateur {
    
    private Festival festival;

    private Organisateur organisateur; 
}
