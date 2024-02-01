package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.DTO.Utilisateur;
import fr.uga.miage.m1.mapper.FestivalMapper;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.service.FestivalService;


@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class FestivalServiceTest {
    
    @InjectMocks
    private FestivalService festivalService;

    @Mock
    private FestivalRepository festivalRepository;

    @Mock
    private FestivalMapper festivalMapper;


    @Test
    public void testGetAllFestival() {
        List<FestivalEntity> festivals = new ArrayList<>();
  
        festivals = festivalRepository.findAll();

        List<Festival> result = festivalService.getAllFestival(null, null, null, null, null, null, null, null, null, null, null);
        assertEquals(festivals.size(), result.size());

    }

    @Test
    public void testGetFestivalById() {

        Festival fest = festivalService.getFestivalById(8L);

        assertEquals(fest.getIdFestival(),8L);
    }
}