package fr.uga.miage.Entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
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
    private Long idLieu;

    @Column(name = "nomLieu")
    private String nomLieu;

    @Column(name = "typeLieu")
    private String typeLieu;

    @Column(name = "adresseLieu")
    private String adresseLieu;

    @Column(name = "longitude", precision = 25, scale = 20)
    private Long longitude;

    @Column(name = "latitude", precision = 25, scale = 20)
    private Long latitude;

    @Column(name = "codeINSEE")
    private Long codeINSEE;

    @JoinColumn(name = "codeINSEE", referencedColumnName = "codeINSEE")
    private Commune Commune;


    public LieuCovoiturage() {
    }

    public LieuCovoiturage(Long idLieu, String nomLieu, String typeLieu, String adresseLieu, Long longitude, Long latitude, Long codeINSEE) {
        this.idLieu = idLieu;
        this.nomLieu = nomLieu;
        this.typeLieu = typeLieu;
        this.adresseLieu = adresseLieu;
        this.longitude = longitude;
        this.latitude = latitude;
        this.codeINSEE = codeINSEE;
    }
}

