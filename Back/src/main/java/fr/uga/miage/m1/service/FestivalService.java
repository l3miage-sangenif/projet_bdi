package fr.uga.miage.m1.service;

import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.FestivalMapper;

@Service
@RequiredArgsConstructor
public class FestivalService {

    private final FestivalRepository repository;

    public List<Festival> getAllFestival() {
        List<FestivalEntity> festivalEntities = repository.findAll();
        List<Festival> festivals = new ArrayList<>();
        for (FestivalEntity f : festivalEntities) {
            festivals.add(FestivalMapper.INSTANCE.toDto(f));
        }
        return festivals;
    }

    public Festival getFestivalById(final Long id) {
        return FestivalMapper.INSTANCE.toDto(repository.findById(id)
            .orElseThrow(() -> new EntityNotFoundRestException(String.format("Aucune entité n'a été trouvée pour festival [%s]", id),id.intValue()))
        );
    }
    
}
