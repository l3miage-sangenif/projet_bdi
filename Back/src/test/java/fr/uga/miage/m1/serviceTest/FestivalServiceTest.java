package fr.uga.miage.m1.serviceTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.boot.test.context.SpringBootTest;

import fr.uga.miage.m1.Person;
import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.FestivalMapper;
import fr.uga.miage.m1.models.FestivalEntity;
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
    private FestivalMapper mapper;


    @Test
    void testGetFestivalById() {

      /*   // Create a new festival entity
        Long festivalId = 2222L;
        FestivalEntity festivalEntity = new FestivalEntity();
        festivalEntity.setIdFestival(festivalId);
        festivalEntity.setNomManifestation("Test Festival");
        festivalEntity.setDateDebut(new Date(0));

        festivalRepository.save(festivalEntity);
        List<FestivalEntity> festivals = new ArrayList<>();
		festivals.add(festivalEntity);
		when(festivalRepository.findAll()).thenReturn(festivals);
		assertEquals("Test Festival", festivalService.getFestivalById(festivalId).getNomManifestation()); */
    }
}
