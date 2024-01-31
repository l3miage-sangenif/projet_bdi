package fr.uga.miage.m1.models;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "Achat")

public class AchatEntity {
    @Id
    @Column(name = "numAchat")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long numAchat;

    @Column(name = "nbPlace")
    private long nbPlace;

    @Column(name = "achatValidee")
    private Boolean achatValidee;

    @ManyToOne
    @JoinColumn(name = "IdFestivalier", referencedColumnName = "userUid")
    private UtilisateurEntity utilisateur;

    public AchatEntity() {
    }

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "achat", cascade = CascadeType.ALL)
    private List<EtapeAchatEntity> etape;
}
