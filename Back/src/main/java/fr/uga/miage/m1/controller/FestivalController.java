package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import java.sql.Date;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.service.FestivalService;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/")
public class FestivalController {

    private final FestivalService festivalService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/festival")
    public List<Festival> getAllFestival(
        @RequestParam(required=false) String name,
        @RequestParam(required=false) String domain,
        @RequestParam(required=false) Date dateDebut,
        @RequestParam(required=false) Date dateFin,
        @RequestParam(required=false) Float longitudeFestival,
        @RequestParam(required=false) Float latitudeFestival,
        @RequestParam(required=false) Float longitudeCovoiturage,
        @RequestParam(required=false) Float latitudeCovoiturage,
        @RequestParam(required=false) Integer distanceRechercheFestival,
        @RequestParam(required=false) Integer distanceRechercheCovoiturage) {
        return festivalService.getAllFestival(name,domain,dateDebut,dateFin,longitudeFestival,latitudeFestival,longitudeCovoiturage,latitudeCovoiturage,distanceRechercheFestival,distanceRechercheCovoiturage);
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/festival/{id}")
    public Festival getFestivalById(@PathVariable Long id) {
        return festivalService.getFestivalById(id);
    }
    
}
