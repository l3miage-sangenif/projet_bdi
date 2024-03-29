package fr.uga.miage.m1.controller;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import fr.uga.miage.m1.dto.Utilisateur;
import fr.uga.miage.m1.request.CreateUserRequest;
import fr.uga.miage.m1.service.UtilisateurService;


@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = {"http://localhost:4200", "https://festicar-fa572.firebaseapp.com/", "https://festi-car-5e104311db52.herokuapp.com/"})
@RequestMapping("api/")
public class UtilisateurController {

    @Autowired
    private UtilisateurService userService;

    @GetMapping("/utilisateurs")
    public ResponseEntity<List<Utilisateur>> getAllUsers() {
        List<Utilisateur> users = userService.getAllUtilisateur();
        return ResponseEntity.ok(users);
    }

    @GetMapping("/utilisateur/{id}")
    public ResponseEntity<Utilisateur> getUserById(@PathVariable String id) {
        Utilisateur user = userService.getUtilisateurById(id);
        return (user != null) ? ResponseEntity.ok(user) : ResponseEntity.notFound().build();
    }
    
    @PostMapping("/utilisateur")@ResponseStatus(HttpStatus.CREATED)
    public Utilisateur postUtilisateur(@RequestBody CreateUserRequest entity) {
        return userService.createUser(entity);
    }
}
