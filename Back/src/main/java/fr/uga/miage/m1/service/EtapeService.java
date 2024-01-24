package fr.uga.miage.m1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import fr.uga.miage.m1.models.EtapeEntity;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.EtapeRepository;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;

@Service
@RequiredArgsConstructor
public class EtapeService {

    private final EtapeRepository repository;


    public List<EtapeEntity> getEtapeByFestival(final Long id) {
        List<EtapeEntity> etapeList = repository.findAll();
        List<EtapeEntity> newEtapeList = new ArrayList();
        for (EtapeEntity etapeEntity : etapeList) {
            if(etapeEntity.getOffreCovoiturage().getFestival().getIdFestival()==id){
                newEtapeList.add(etapeEntity);
            }
        }
        if (newEtapeList.isEmpty()){
            throw new EntityNotFoundRestException(String.format("Aucun covoiturage n'a été trouvée pour festival [%s]", id),id.intValue());
        }
        return newEtapeList;
    }

}
