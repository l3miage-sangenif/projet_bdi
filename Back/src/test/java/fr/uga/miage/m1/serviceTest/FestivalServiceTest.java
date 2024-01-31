package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import java.util.List;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.service.FestivalService;



@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class FestivalServiceTest {
    
    @Autowired
    private FestivalService festivalService;

    @Autowired 
    private FestivalRepository festivalRepository;


    @Test
    public void FestivalService_GetAllFestival_ReturnsResponsiveDto(){
        

        List<Festival> festivals = festivalService.getAllFestival(null,null,null,null,null,null,null,null,null,null,null);
        // Assert that the list of festivals is not null
        assertNotNull(festivals);

        // Assert that the list contains the expected number of festivals
        assertEquals(2753, festivals.size()); 

    }



    @Test
    public void testGetFestivalById() {
        // Mock data
        Long festivalId = 1L;
        FestivalEntity festivalEntity = new FestivalEntity();
        festivalEntity.setIdFestival(festivalId);
        festivalEntity.setNomManifestation("Test Festival");
        // Set other properties of festivalEntity
        festivalRepository.save(festivalEntity);
 
        Festival fest = festivalService.getFestivalById(festivalId);
    
        assertEquals("Test Festival", fest.getNomManifestation());
        // Add more assertions as needed
    }
}