package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import fr.uga.miage.m1.DTO.Achat;

import fr.uga.miage.m1.service.AchatService;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.request.UpdateAchatRequest;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;




@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200", "https://festicar-fa572.firebaseapp.com/"})
@RequestMapping("api/")
public class AchatController {
    private final AchatService achatService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/achat/{userUid}")
    public List<Achat> getAchatbyUserId(@PathVariable String userUid) {
        return achatService.getPanierByUserId(userUid);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/achat/unknow/{achatId}")
    public Achat getAchatbyUserId(@PathVariable int achatId) {
        return achatService.getPanierByAchatId(achatId);
    }
    
    @PostMapping("achat/{userUid}")
    public Achat postAchat(@PathVariable final String userUid,@RequestBody CreateAchatRequest entity) {
        return achatService.createAchat(entity,userUid);
    }

    @PostMapping("achat")
    public Achat postAchatEmpty(@RequestBody CreateAchatRequest entity) {
        return achatService.createAchatEmpty(entity);
    }

    @PutMapping("achat/{achatId}")
    public Achat putAchat(@PathVariable int achatId, @RequestBody UpdateAchatRequest entity) {        
        return achatService.updateAchat(entity,achatId);
    }
    
    
}
