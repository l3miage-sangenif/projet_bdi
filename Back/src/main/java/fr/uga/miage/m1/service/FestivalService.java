package fr.uga.miage.m1.service;

import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;

@Service
@RequiredArgsConstructor
public class FestivalService {

    private final FestivalRepository repository;

    public List<FestivalEntity> getAllFestival() {
        return repository.findAll();
    }

    public FestivalEntity getFestivalById(final Long id) {
        return repository.findById(id).orElseThrow(() -> new EntityNotFoundRestException(String.format("Aucune entité n'a été trouvée pour festival [%s]", id),id.intValue()));
    }
    
}
