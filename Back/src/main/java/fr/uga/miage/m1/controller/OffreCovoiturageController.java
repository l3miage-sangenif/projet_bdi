package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.DTO.OffreCovoiturage;
import fr.uga.miage.m1.service.OffreCovoiturageService;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class OffreCovoiturageController {

    private final OffreCovoiturageService offreCovoiturageService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/covoiturage/{idFestival}")
    public List<OffreCovoiturage> getEtapeByFestival(@PathVariable Long idFestival) {
        return offreCovoiturageService.getOffreByFestival(idFestival);
    }
    
}
