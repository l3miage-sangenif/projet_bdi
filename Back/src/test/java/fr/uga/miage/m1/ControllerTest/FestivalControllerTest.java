package fr.uga.miage.m1.ControllerTest;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.servlet.MockMvc;

import fr.uga.miage.m1.dto.Festival;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.service.FestivalService;

import org.springframework.http.MediaType;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.List;


@SpringBootTest
@AutoConfigureMockMvc
public class FestivalControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private FestivalService festivalService;

    @Autowired
    private FestivalRepository festivalRepository;



    @Test
    public void testGetFestivalById() throws Exception {

        Festival fest = festivalService.getFestivalById(1L);
        
        mockMvc.perform(get("/api/festival/1"))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$.idFestival").value(fest.getIdFestival()))
               .andExpect(jsonPath("$.nomManifestation").value(fest.getNomManifestation())); 
    }
}