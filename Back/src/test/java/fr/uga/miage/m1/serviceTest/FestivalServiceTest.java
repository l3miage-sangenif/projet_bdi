package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;
import fr.uga.miage.m1.dto.Festival;
import fr.uga.miage.m1.mapper.FestivalMapper;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.service.FestivalService;

import static org.mockito.BDDMockito.given;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class FestivalServiceTest {
    
        
        private FestivalService festivalService;
    
        @Mock
        private FestivalRepository festivalRepository;
    
        @Mock
        private FestivalMapper festivalMapper;
         
        @BeforeEach
        public void setUp() throws Exception {
            MockitoAnnotations.openMocks(this);
            festivalService = new FestivalService(festivalRepository);
        }
    
        @Test
        public void testGetAllFestival() {
            List<FestivalEntity> festivals = new ArrayList<>();
      
            festivals = festivalRepository.findAll();
    
            List<Festival> result = festivalService.getAllFestival(null, null, null, null, null, null, null, null, null, null, null);
            assertEquals(festivals.size(), result.size());
    
        }
    
        @Test
        public void testGetFestivalById() {
            FestivalEntity fest = new FestivalEntity();
            fest.setIdFestival(2222);

            given(festivalRepository.findById(2222L)).willReturn(Optional.of(fest));
    
            Festival fest1 = festivalService.getFestivalById(2222L);
    
            Assertions.assertNotNull(fest); // Assert that a festival object is returned
            assertEquals(fest1.getIdFestival(),fest.getIdFestival());
        }
    
}  
