package fr.uga.miage.m1.ControllerTest;




import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import fr.uga.miage.m1.DTO.Utilisateur;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.service.UtilisateurService;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import fr.uga.miage.m1.DTO.Achat;
import fr.uga.miage.m1.DTO.Etape;
import fr.uga.miage.m1.mapper.EtapeMapper;
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.models.AchatEntity;
import fr.uga.miage.m1.models.EtapeAchatEntity;
import fr.uga.miage.m1.models.EtapeEntity;
import fr.uga.miage.m1.repository.AchatRepository;
import fr.uga.miage.m1.repository.EtapeAchatRepository;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.request.CreateEtapeAchatRequest;
import fr.uga.miage.m1.service.AchatService;
import fr.uga.miage.m1.service.EtapeService;

import org.springframework.http.*;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@SpringBootTest
@AutoConfigureMockMvc
public class AchatControllerTest {

    @Autowired
    private AchatService achatService;

    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private AchatRepository achatRepository;

    @Autowired
    private MockMvc mockMvc;


    @Test
    public void testGetAchatByUserId() throws Exception {
        List<Achat> achat = achatService.getPanierByUserId("cf459b25-efe0-46f7-bde6-678aa399cf5a");
        System.out.println(achat.get(0).getNumAchat());
        mockMvc.perform(get("/api/panier/cf459b25-efe0-46f7-bde6-678aa399cf5a"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$[0].numAchat").value(achat.get(0).getNumAchat()))
               .andExpect(jsonPath("$[0].achatValidee").value(achat.get(0).getAchatValidee())); 
    }

    private AchatEntity createAchatRequestEntity(Long id, Long nb, UtilisateurEntity user) {
        AchatEntity achatEntity = new AchatEntity();
        achatEntity.setNumAchat(id);
        achatEntity.setNbPlace(nb);
        achatEntity.setAchatValidee(false);
        achatEntity.setUtilisateur(user);
        achatRepository.save(achatEntity);
        return achatEntity;
    }

    public static byte[] convertObjectToJsonBytes(Object object)
            throws IOException {
        ObjectMapper mapper = new ObjectMapper();
        mapper.setSerializationInclusion(JsonInclude.Include.NON_EMPTY);

        JavaTimeModule module = new JavaTimeModule();
        mapper.registerModule(module);

        return mapper.writeValueAsBytes(object);
    }

    @Test 
    public void testPostAchat() throws Exception {

        String userUid = "856ed660-91e7-4091-9e5c-782d586125dc";
        List<CreateEtapeAchatRequest> ea = new ArrayList<>();
        ea.add(CreateEtapeAchatRequest.builder().idTrajet(1).nbPlace(1).build());

        CreateAchatRequest request = CreateAchatRequest.builder()
            .etape(ea)
            .build();

        // Mock service method
        Achat achat = achatService.createAchat(request, userUid);

        mockMvc.perform(post("/api/achat/856ed660-91e7-4091-9e5c-782d586125dc")
            .accept(MediaType.APPLICATION_JSON)
            .header("Content-Type", "application/json")
            .header("Authorization", "XSZ")
            .content(convertObjectToJsonBytes(achat)))
            .andExpect(status().isCreated())
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.numAchat").exists())  // Assert that userUid property exists
            .andExpect(jsonPath("$.nbPlace").value(1L)); 
    }
    
}
