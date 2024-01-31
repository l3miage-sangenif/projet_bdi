package fr.uga.miage.m1.ControllerTest;



import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import fr.uga.miage.m1.DTO.Achat;
import fr.uga.miage.m1.service.AchatService;

@SpringBootTest
@AutoConfigureMockMvc
public class AchatControllerTest {

    @Autowired
    private AchatService achatService;

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

    
}
