package fr.uga.miage.m1.ControllerTest;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.web.servlet.MockMvc;

import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.service.FestivalService;

import org.springframework.http.MediaType;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.ArrayList;
import java.util.List;


@SpringBootTest
@AutoConfigureMockMvc
public class FestivalControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private FestivalService festivalService;

    @Mock
    private FestivalRepository festivalRepository;

    private FestivalEntity createFestivalEntity(Long id, String nomManifestation) {
        FestivalEntity festivalEntity = new FestivalEntity();
        festivalEntity.setIdFestival(id);
        festivalEntity.setNomManifestation(nomManifestation);
        festivalRepository.save(festivalEntity);
        return festivalEntity;
    }
/* 
    @Test
    void testGetAllFestival() throws Exception {
        
        List<Festival> festivals = festivalService.getAllFestival(null,null,null,null,null,null,null,null,null,null,null);

        mockMvc.perform(get("/api/festival"))
            .andExpect(status().isOk())
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))
            .andExpect(jsonPath("$").isArray())
            .andExpect(jsonPath("$[0].idFestival").value(festivals.get(0).getIdFestival()))
            .andExpect(jsonPath("$[0].nomManifestation").value(festivals.get(0).getNomManifestation()))
            .andExpect(jsonPath("$[1].idFestival").value(festivals.get(1).getIdFestival()))
            .andExpect(jsonPath("$[1].nomManifestation").value(festivals.get(1).getNomManifestation()));
    }  */
 
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