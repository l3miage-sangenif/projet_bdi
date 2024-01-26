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

import fr.uga.miage.m1.DTO.Etape;
import fr.uga.miage.m1.models.EtapeEntity;
import fr.uga.miage.m1.service.EtapeService;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class EtapeController {


    private final EtapeService etapeService;

    
}
