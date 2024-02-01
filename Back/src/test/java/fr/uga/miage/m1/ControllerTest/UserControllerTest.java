package fr.uga.miage.m1.ControllerTest;

import java.io.IOException;
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
import fr.uga.miage.m1.dto.Utilisateur;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.service.UtilisateurService;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class UserControllerTest {

     @Autowired
    private MockMvc mockMvc;

    @Autowired
    private UtilisateurService UtilisateurService;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    private UtilisateurEntity createUtilisateurEntity(String id, String nom) {
        UtilisateurEntity utilisateurEntity = new UtilisateurEntity();
        utilisateurEntity.setUserUid(id);
        utilisateurEntity.setNom(nom);
        utilisateurRepository.save(utilisateurEntity);
        return utilisateurEntity;
    }

    @Test
    void testGetAllUsers() throws Exception {
   
        List<Utilisateur> utilisateurs = UtilisateurService.getAllUtilisateur();

        mockMvc.perform(get("/api/utilisateurs"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$[0].userUid").value(utilisateurs.get(0).getUserUid()))
            .andExpect(jsonPath("$[0].nom").value(utilisateurs.get(0).getNom()))
            .andExpect(jsonPath("$[1].userUid").value(utilisateurs.get(1).getUserUid()))
            .andExpect(jsonPath("$[1].nom").value(utilisateurs.get(1).getNom()));
    }

    @Test
    public void testGetUtilisateurById() throws Exception {
            
        Utilisateur user = UtilisateurService.getUtilisateurById("7d75c89b-f407-4118-af22-d4ad259f202d");
        
        mockMvc.perform(get("/api/utilisateur/7d75c89b-f407-4118-af22-d4ad259f202d"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$.userUid").value(user.getUserUid()))
               .andExpect(jsonPath("$.nom").value(user.getNom())); 
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
    public void testPostUser() throws Exception {

         mockMvc.perform(post("/api/utilisateur")
            .accept(MediaType.APPLICATION_JSON)
            .header("Content-Type", "application/json")
            .header("Authorization", "XSZ")
            .content(convertObjectToJsonBytes(createUtilisateurEntity("23ZE43","testPostUser" ))))
            .andExpect(status().isCreated())
            .andExpect(jsonPath("$.userUid").exists())  // Assert that userUid property exists
            .andExpect(jsonPath("$.nom").value("testPostUser")); 
    }


}
