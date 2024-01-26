package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.DTO.Achat;
import fr.uga.miage.m1.mapper.AchatMapper;
import fr.uga.miage.m1.models.AchatEntity;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.service.AchatService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
@RequestMapping("api/")
public class AchatController {

    private final AchatService achatService;
    
    @PostMapping("achat/{userUid}")
    public Achat postAchat(@PathVariable final String userUid,@RequestBody CreateAchatRequest entity) {
        return achatService.createAchat(entity,userUid);
    }
    
    
}
