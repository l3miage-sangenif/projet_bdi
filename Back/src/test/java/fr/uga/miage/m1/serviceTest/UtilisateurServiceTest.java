package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import fr.uga.miage.m1.DTO.Utilisateur;
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.request.CreateUserRequest;
import fr.uga.miage.m1.service.UtilisateurService;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class UtilisateurServiceTest {
      
    @InjectMocks
    private UtilisateurService utilisateurService;

    @Mock
    private UtilisateurRepository utilisateurRepository;

    @Mock
    private UtilisateurMapper utilisateurMapper;

    private UtilisateurEntity createUtilisateurEntity(String id, String nomManifestation) {
        UtilisateurEntity utilisateurEntity = new UtilisateurEntity();
        utilisateurEntity.setUserUid(id);
        utilisateurEntity.setNom(nomManifestation);
        utilisateurRepository.save(utilisateurEntity);
        return utilisateurEntity;
    }

     @Test
    public void UtilisateurService_GetAllUtilisateur_ReturnsResponsiveDto(){

        List<UtilisateurEntity> utilisateurs = new ArrayList<>();
  
        utilisateurs = utilisateurRepository.findAll();

        List<Utilisateur> result = utilisateurService.getAllUtilisateur();
        assertEquals(utilisateurs.size(), result.size());
    }

    @Test
    void testPostUser(){
        CreateUserRequest request = CreateUserRequest.builder()
            .userUid("test")
            .nom("test")
            .prenom("test")
            .email("test")
            .build();

       

        Utilisateur createdUser = utilisateurService.createUser(request);

        assertEquals(request.getUserUid(),createdUser.getUserUid());
    } 

    @Test
    public void testGetUtilisateurById() {

        String user_uid = "11e8bf4d-a2f1-4788-b5eb-b24369d2c0b4";

        Utilisateur fest = utilisateurService.getUtilisateurById(user_uid);

        assertEquals(fest.getUserUid(),user_uid);
    }

}