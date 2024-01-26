package fr.uga.miage.m1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import fr.uga.miage.m1.models.OffreCovoiturageEntity;
import fr.uga.miage.m1.repository.OffreCovoiturageRepository;
import fr.uga.miage.m1.DTO.OffreCovoiturage;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.OffreCovoiturageMapper;

@Service
@RequiredArgsConstructor
public class OffreCovoiturageService {

    private final OffreCovoiturageRepository repository;


    public List<OffreCovoiturage> getOffreByFestival(final Long id) {
        List<OffreCovoiturageEntity> etapeList = repository.findAll();
        List<OffreCovoiturage> newEtapeList = new ArrayList();
        for (OffreCovoiturageEntity etapeEntity : etapeList) {
            if(etapeEntity.getFestival().getIdFestival()==id){
                newEtapeList.add(OffreCovoiturageMapper.INSTANCE.toDto(etapeEntity));
            }
        }
        if (newEtapeList.isEmpty()){
            throw new EntityNotFoundRestException(String.format("Aucun covoiturage n'a été trouvée pour festival [%s]", id),id.intValue());
        }
        return newEtapeList;
    }

}
