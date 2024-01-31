package fr.uga.miage.m1.service;

import java.util.ArrayList;
import java.util.List;


import org.springframework.stereotype.Service;
import fr.uga.miage.m1.DTO.Achat;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.AchatMapper;
import fr.uga.miage.m1.models.AchatEntity;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.AchatRepository;
import fr.uga.miage.m1.mapper.EtapeAchatMapper;
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.models.EtapeAchatEntity;
import fr.uga.miage.m1.repository.EtapeRepository;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.request.CreateEtapeAchatRequest;
import fr.uga.miage.m1.request.UpdateAchatRequest;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AchatService {

    private final AchatRepository achatRepository;
    private final UtilisateurService utilisateurService;
    private final EtapeRepository etapeRepository;
    private final UtilisateurRepository utilisateurRepository;
    
    public List<Achat> getPanierByUserId(final String id) {
        List<AchatEntity> achatList = achatRepository.findAll();
        List<Achat> newAchatList = new ArrayList();
        for (AchatEntity achatEntity : achatList) {
            if(achatEntity.getUtilisateur().getUserUid().equals(id)){
                System.out.println(achatEntity.getEtape());
                newAchatList.add(AchatMapper.INSTANCE.toDto(achatEntity));
                System.out.println(AchatMapper.INSTANCE.toDto(achatEntity));
            } 
        }
        if (newAchatList.isEmpty()){
            throw new EntityNotFoundRestException(String.format("Aucun achat n'a été trouvée pour utilisateur [%s]", id),id);
        }
        return newAchatList;
    }

    public Achat createAchat(CreateAchatRequest entity,String userUid) {
        int nb_etape_total=0;
        for (CreateEtapeAchatRequest e : entity.getEtape()) {
            nb_etape_total=nb_etape_total+e.getNbPlace();
        }
        if(entity.getEtape().isEmpty() || etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival().getNbPlaceRestante()>nb_etape_total){
            UtilisateurEntity user = UtilisateurMapper.INSTANCE.toEntity(utilisateurService.getUtilisateurById(userUid));
            AchatEntity achat = AchatMapper.INSTANCE.toEntity(entity);
            List<EtapeAchatEntity> etapes= new ArrayList();
            achat.setUtilisateur(user);
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

    public Achat createAchatEmpty(CreateAchatRequest entity) {
        int nb_etape_total=0;
        for (CreateEtapeAchatRequest e : entity.getEtape()) {
            nb_etape_total=nb_etape_total+e.getNbPlace();
        }
        if(entity.getEtape().isEmpty() && nb_etape_total ==0){
            UtilisateurEntity user = utilisateurRepository.getReferenceById("empty");
            AchatEntity achat = AchatMapper.INSTANCE.toEntity(entity);
            List<EtapeAchatEntity> etapes= new ArrayList();
            achat.setUtilisateur(user);
            achat.setAchatValidee(false);
            achat.setEtape(etapes);
            return AchatMapper.INSTANCE.toDto(achatRepository.save(achat));
        }
        throw new EntityNotFoundRestException(
            String.format("Pas assez de place restante pour le festival [%s]", 
            etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival()),
            etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival());
    }

    public Achat updateAchat(UpdateAchatRequest entity, int achatId) {
        int nb_etape_total=0;
        for (CreateEtapeAchatRequest e : entity.getEtape()) {
            nb_etape_total=nb_etape_total+e.getNbPlace();
        }
        if(entity.getEtape().isEmpty() && nb_etape_total ==0 || etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival().getNbPlaceRestante()>entity.getNbPlace()){
            AchatEntity achat = achatRepository.getReferenceById((long) achatId);
            UtilisateurEntity user = UtilisateurMapper.INSTANCE.toEntity(utilisateurService.getUtilisateurById(entity.getUserUid()));
            int nbPlaceDemander=0;
            List<EtapeAchatEntity> etapes= new ArrayList();
            for (CreateEtapeAchatRequest etape : entity.getEtape()) {
                EtapeAchatEntity e =EtapeAchatMapper.INSTANCE.toEntity(etape);
                e.setAchat(achat);
                e.setEtape(etapeRepository.getReferenceById((long) etape.getIdTrajet()));
                etapes.add(e);
                nbPlaceDemander+=etape.getNbPlace();
            }
            if(nbPlaceDemander==entity.getNbPlace()){
                achat.setNbPlace(entity.getNbPlace());
                achat.setUtilisateur(user);
                achat.setEtape(etapes);
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
