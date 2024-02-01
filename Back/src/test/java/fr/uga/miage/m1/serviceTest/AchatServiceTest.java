package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;
import org.junit.jupiter.api.BeforeEach;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import fr.uga.miage.m1.dto.Achat;
import fr.uga.miage.m1.mapper.AchatMapper;
import fr.uga.miage.m1.models.AchatEntity;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.AchatRepository;
import fr.uga.miage.m1.service.AchatService;

import static org.mockito.BDDMockito.given;

public class AchatServiceTest {
    @InjectMocks
    private AchatService achatService;
    @Mock
    private AchatRepository achatRepository;
    @Mock AchatMapper achatMapper;

    @BeforeEach
    public void setup() {
        achatRepository = mock(AchatRepository.class);
        achatService = new AchatService(achatRepository, null, null, null, null);
    }

    /* @Test
    public void testGetPanierByUserId() {
        String userId = "user123";
        UtilisateurEntity user = new UtilisateurEntity();
        user.setUserUid(userId);

        AchatEntity achatEntity1 = new AchatEntity();
        AchatEntity achatEntity2 = new AchatEntity();
        achatEntity1.setNumAchat(1);
        achatEntity2.setNumAchat(2);
        achatEntity1.setUtilisateur(user); 
        achatEntity2.setUtilisateur(user); 

        List<AchatEntity> achatList = new ArrayList<>();
        achatList.add(achatEntity1);
        achatList.add(achatEntity2);
        System.out.println(achatEntity1.getNumAchat());
        given(achatRepository.save(achatEntity1)).willReturn(achatEntity1);
        given(achatRepository.save(achatEntity1)).willReturn(achatEntity2);

        when(achatRepository.findAll()).thenReturn(achatList);

        List<Achat> result = achatService.getPanierByUserId(userId);

        assertEquals(2, result.size()); 
    } */
}
