package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.service.FestivalService;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class FestivalController {

    private final FestivalService festivalService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/festival")
    public List<Festival> getAllFestival() {
        return festivalService.getAllFestival();
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/festival/{id}")
    public Festival getFestivalById(@PathVariable Long id) {
        return festivalService.getFestivalById(id);
    }
    
}
