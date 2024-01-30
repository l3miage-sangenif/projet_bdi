package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.service.EtapeService;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/")
public class EtapeController {


    private final EtapeService etapeService;

    
}
