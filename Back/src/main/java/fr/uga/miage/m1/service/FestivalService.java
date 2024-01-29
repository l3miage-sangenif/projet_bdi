package fr.uga.miage.m1.service;
import lombok.RequiredArgsConstructor;

import java.sql.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import fr.uga.miage.m1.DTO.Etape;
import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.DTO.OffreCovoiturage;
import fr.uga.miage.m1.models.FestivalEntity;
import fr.uga.miage.m1.repository.FestivalRepository;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.FestivalMapper;

@Service
@RequiredArgsConstructor
public class FestivalService {

    private final FestivalRepository repository;

    private final OffreCovoiturageService offreCovoiturageService;

    public List<Festival> getAllFestival(String name, String domain, Date dateDebut, Date dateFin, Float longitudeFestival, Float latitudeFestival, Float longitudeCovoiturage, Float latitudeCovoiturage, Integer distanceRechercheFestival, Integer distanceRechercheCovoiturage) {
        List<FestivalEntity> festivalEntities;
        if(longitudeCovoiturage != null && latitudeCovoiturage!=null){
            if(distanceRechercheCovoiturage==null){
                distanceRechercheCovoiturage=30;
            }
            festivalEntities = repository.findAllWithCovoiturage(longitudeCovoiturage, latitudeCovoiturage,distanceRechercheCovoiturage);
        }
        else {
            festivalEntities = repository.findAll();
        }
        List<Festival> festivals = new ArrayList<>();
        for (FestivalEntity f : festivalEntities) {
            if (name!=null && !f.getNomManifestation().contains(name)) {
                continue;
            }
            if (domain!=null && !f.getSousDomaine().getNomSousDomaine().contains(domain) && !f.getSousDomaine().getDomaine().getNomDomaine().contains(domain) ) {
                continue;
            }
            if (dateDebut!=null && dateDebut.compareTo(f.getDateFin())>0) {
                continue;
            }
            if (dateFin!=null && dateFin.compareTo(f.getDateDebut())<0) {
                continue;
            }
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