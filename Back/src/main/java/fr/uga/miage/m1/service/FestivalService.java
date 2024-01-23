package fr.uga.miage.m1.service;

import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;

@Service
@RequiredArgsConstructor
public class FestivalService {

    private final FestivalRepository repository;

    public List<FestivalEntity> getAllFestival() {
        return repository.findAll();
    }
    
}
