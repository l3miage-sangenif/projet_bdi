package fr.uga.miage.m1.ControllerTest;



import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import fr.uga.miage.m1.dto.Utilisateur;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.service.UtilisateurService;
import fr.uga.miage.m1.dto.Achat;
import fr.uga.miage.m1.dto.Etape;
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
    private EtapeAchatRepository etapeAchatRepository;


    @Autowired
    private UtilisateurService utilisateurService;

    @Mock
    private UtilisateurMapper mapper;

    @Autowired
    private AchatRepository achatRepository;

    @Autowired private ObjectMapper objectMapper;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @Autowired
    private MockMvc mockMvc;


    /* @Test
    public void testGetAchatByUserId() throws Exception {
    
        mockMvc.perform(get("/api/panier/cf459b25-efe0-46f7-bde6-678aa399cf5a"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON));
         
    } */

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
        String userUid = "2233FF";
        UtilisateurEntity utilisateurEntity = new UtilisateurEntity();
        utilisateurEntity.setUserUid(userUid);
        utilisateurEntity.setNom("test");
        utilisateurRepository.save(utilisateurEntity);

        MvcResult mvcResult = 
             mockMvc.perform(post("/api/utilisateur")
                .accept(MediaType.APPLICATION_JSON)
                .header("Content-Type", "application/json")
                .header("Authorization", "XSZ")
                .content(convertObjectToJsonBytes(utilisateurEntity)))
                .andReturn();
        String response = mvcResult.getResponse().getContentAsString();
        Utilisateur createdUser = objectMapper.readValue(response, Utilisateur.class);

        
        CreateAchatRequest request = CreateAchatRequest.builder()
            .user(createdUser)
            .achatValidee(false)
            .etape(Arrays.asList(CreateEtapeAchatRequest.builder().idTrajet(1).nbPlace(3).build()))
            .build();

        

        mockMvc.perform(post("/api/achat/2233FF")
            .accept(MediaType.APPLICATION_JSON)
            .header("Content-Type", "application/json")
            .header("Authorization", "XSZ")
            .content(objectMapper.writeValueAsString((request))));
           

    }
    
}
