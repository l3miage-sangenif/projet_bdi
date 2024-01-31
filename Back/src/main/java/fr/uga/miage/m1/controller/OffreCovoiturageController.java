package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.DTO.OffreCovoiturage;
import fr.uga.miage.m1.service.OffreCovoiturageService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200", "https://festicar-fa572.firebaseapp.com/"})
@RequestMapping("api/")
public class OffreCovoiturageController {

    private final OffreCovoiturageService offreCovoiturageService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/covoiturage/{idFestival}")
    public List<OffreCovoiturage> getEtapeByFestival(@PathVariable Long idFestival,
        @RequestParam(required=false) String modele,
        @RequestParam(required=false) String couleur,
        @RequestParam(required=false) Float longitudeCovoiturage,
        @RequestParam(required=false) Float latitudeCovoiturage,
        @RequestParam(required=false) Integer distanceRechercheCovoiturage,
        @RequestParam(required=false) Integer nbPlace) {
        return offreCovoiturageService.getOffreByFestival(idFestival,modele,couleur,longitudeCovoiturage,latitudeCovoiturage,distanceRechercheCovoiturage,nbPlace);
    }
    
}
