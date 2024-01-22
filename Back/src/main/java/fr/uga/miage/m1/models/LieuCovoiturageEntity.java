package fr.uga.miage.m1.models;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "LieuCovoiturage")
public class LieuCovoiturage {

    @Id
    @Column(name = "idLieu")
    private long idLieu;

    @Column(name = "nomLieu")
    private String nomLieu;

    @Column(name = "typeLieu")
    private String typeLieu;

    @Column(name = "adresseLieu")
    private String adresseLieu;

    @Column(name = "longitude", precision = 25, scale = 20)
    private BigDecimal longitude;

    @Column(name = "latitude", precision = 25, scale = 20)
    private BigDecimal latitude;

    @ManyToOne
    @JoinColumn(name = "codeINSEE", referencedColumnName = "codeINSEE")
    private Commune commune;

    public LieuCovoiturage() {}
}

