package fr.uga.miage.m1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import lombok.RequiredArgsConstructor;
import fr.uga.miage.m1.models.OffreCovoiturageEntity;
import fr.uga.miage.m1.repository.OffreCovoiturageRepository;
import fr.uga.miage.m1.dto.OffreCovoiturage;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.OffreCovoiturageMapper;

@Service
@RequiredArgsConstructor
public class OffreCovoiturageService {

    private final OffreCovoiturageRepository repository;


    public List<OffreCovoiturage> getOffreByFestival(final Long id, String modele,String couleur,Float longitudeCovoiturage,Float latitudeCovoiturage,Integer distanceRechercheCovoiturage,Integer nbPlace) {
        List<OffreCovoiturageEntity> etapeList;
        if(distanceRechercheCovoiturage==null){
            distanceRechercheCovoiturage=30;
        }
        if(nbPlace==null){
            nbPlace=1;
        }
        if(latitudeCovoiturage!=null && longitudeCovoiturage!=null){

            etapeList = repository.findAllDistance(id,latitudeCovoiturage,longitudeCovoiturage,distanceRechercheCovoiturage,nbPlace);
        }
        else {
            etapeList = repository.findAll(id,nbPlace);
        }
        List<OffreCovoiturage> newEtapeList = new ArrayList();
        for (OffreCovoiturageEntity etapeEntity : etapeList) {
            if(modele!=null && !etapeEntity.getModele().contains(modele)  || couleur!=null && !etapeEntity.getCouleur().contains(couleur)){
                continue;
            }
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
