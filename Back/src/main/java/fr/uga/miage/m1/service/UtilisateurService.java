package fr.uga.miage.m1.service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import fr.uga.miage.m1.DTO.Utilisateur;
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.request.CreateUserRequest;

@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository userRepository;

    
    public List<Utilisateur> getAllUtilisateur() {
        List<UtilisateurEntity> users = userRepository.findAll();
        List<Utilisateur> userslist = new ArrayList<>();
        for (UtilisateurEntity user : users) {
            userslist.add(UtilisateurMapper.INSTANCE.toDto(user));
        }
        return userslist;
    }

   
    public Utilisateur getUtilisateurById(String id) {
        UtilisateurEntity user = userRepository.findById(id).orElse(null);
        return (user != null) ? UtilisateurMapper.INSTANCE.toDto(user) : null;
    }

    public Utilisateur createUser(CreateUserRequest utilisateur) {
        UtilisateurEntity user = UtilisateurMapper.INSTANCE.toEntity(utilisateur);
        return UtilisateurMapper.INSTANCE.toDto(userRepository.save(user));
    }   
    
}
