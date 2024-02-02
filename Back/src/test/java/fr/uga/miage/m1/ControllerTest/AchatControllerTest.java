package fr.uga.miage.m1.ControllerTest;



import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import java.io.IOException;
import java.util.Arrays;

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
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.request.CreateEtapeAchatRequest;



@SpringBootTest
@AutoConfigureMockMvc
public class AchatControllerTest {


    @Mock
    private UtilisateurMapper mapper;

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
