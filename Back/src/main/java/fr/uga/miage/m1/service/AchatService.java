package fr.uga.miage.m1.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import fr.uga.miage.m1.DTO.Achat;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.AchatMapper;
import fr.uga.miage.m1.mapper.EtapeAchatMapper;
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.models.AchatEntity;
import fr.uga.miage.m1.models.EtapeAchatEntity;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.AchatRepository;
import fr.uga.miage.m1.repository.EtapeRepository;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.request.CreateEtapeAchatRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AchatService {
    
    private final AchatRepository achatRepository;

    private final UtilisateurService utilisateurService;

    private final EtapeService etapeService;

    private final EtapeRepository etapeRepository;

    public Achat createAchat(CreateAchatRequest entity,String userUid) {
        if(etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival().getNbPlaceRestante()>entity.getNbPlace()){
            UtilisateurEntity user = UtilisateurMapper.INSTANCE.toEntity(utilisateurService.getUtilisateurById(userUid));
            AchatEntity achat = AchatMapper.INSTANCE.toEntity(entity);
            List<UtilisateurEntity> listUser= new ArrayList();
            List<EtapeAchatEntity> etapes= new ArrayList();
            listUser.add(user);
            achat.setUtilisateurs(listUser);
            achat.setAchatValidee(false);
            int nbPlaceDemander=0;
            for (CreateEtapeAchatRequest etape : entity.getEtape()) {
                EtapeAchatEntity e =EtapeAchatMapper.INSTANCE.toEntity(etape);
                e.setAchat(achat);
                e.setEtape(etapeRepository.getReferenceById((long) etape.getIdTrajet()));
                etapes.add(e);
                nbPlaceDemander+=etape.getNbPlace();
            }
            achat.setEtape(etapes);
            if(nbPlaceDemander==achat.getNbPlace()){
                return AchatMapper.INSTANCE.toDto(achatRepository.save(achat));
            }
            throw new EntityNotFoundRestException(
                String.format("Nombre de place de covoiturage different du nombre d'achat"),0);
        }
        throw new EntityNotFoundRestException(
            String.format("Pas assez de place restante pour le festival [%s]", 
            etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival()),
            etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival());
    }
}
