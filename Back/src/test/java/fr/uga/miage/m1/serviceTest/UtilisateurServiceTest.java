package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import static org.mockito.BDDMockito.given;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;

import fr.uga.miage.m1.dto.Utilisateur;
import fr.uga.miage.m1.mapper.UtilisateurMapper;

import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.request.CreateUserRequest;
import fr.uga.miage.m1.service.UtilisateurService;




@DataJpaTest
@ExtendWith(MockitoExtension.class)
class UtilisateurServiceTest {
      
    @InjectMocks
    private UtilisateurService utilisateurService;

    @Mock
    private UtilisateurRepository utilisateurRepository;

    @Mock
    private UtilisateurMapper utilisateurMapper;

     @Test
    public void UtilisateurService_GetAllUtilisateur_ReturnsResponsiveDto(){

        List<UtilisateurEntity> utilisateurs = new ArrayList<>();
  
        utilisateurs = utilisateurRepository.findAll();

        List<Utilisateur> result = utilisateurService.getAllUtilisateur();
        assertEquals(utilisateurs.size(), result.size());
    }



    @Test
    void getById_givenExistingId_returnUser() {
            UtilisateurEntity fest = new UtilisateurEntity();
            fest.setUserUid("2222");

            given(utilisateurRepository.findById("2222")).willReturn(Optional.of(fest));
    
            Utilisateur fest1 = utilisateurService.getUtilisateurById("2222");
    
            Assertions.assertNotNull(fest); // Assert that a festival object is returned
            assertEquals(fest1.getUserUid(),fest.getUserUid());
        }

}