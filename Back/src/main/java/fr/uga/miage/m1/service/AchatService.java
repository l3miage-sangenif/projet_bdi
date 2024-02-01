package fr.uga.miage.m1.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import fr.uga.miage.m1.dto.Achat;
import fr.uga.miage.m1.exception.EntityNotFoundRestException;
import fr.uga.miage.m1.mapper.AchatMapper;
import fr.uga.miage.m1.models.AchatEntity;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.repository.AchatRepository;
import fr.uga.miage.m1.repository.EtapeAchatRepository;
import fr.uga.miage.m1.mapper.EtapeAchatMapper;
import fr.uga.miage.m1.mapper.UtilisateurMapper;
import fr.uga.miage.m1.models.EtapeAchatEntity;
import fr.uga.miage.m1.models.EtapeAchatIdEntity;
import fr.uga.miage.m1.repository.EtapeRepository;
import fr.uga.miage.m1.repository.UtilisateurRepository;
import fr.uga.miage.m1.request.CreateAchatRequest;
import fr.uga.miage.m1.request.CreateEtapeAchatRequest;
import fr.uga.miage.m1.request.UpdateAchatRequest;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AchatService {

    private final AchatRepository achatRepository;
    private final UtilisateurService utilisateurService;
    private final EtapeRepository etapeRepository;
    private final UtilisateurRepository utilisateurRepository;
    private final EtapeAchatRepository etapeAchatRepository;

    public List<Achat> getPanierByUserId(final String id) {
        List<AchatEntity> achatList = achatRepository.findAll();
        List<Achat> newAchatList = new ArrayList();
        for (AchatEntity achatEntity : achatList) {
            if(achatEntity.getUtilisateur().getUserUid().equals(id)&&Boolean.FALSE.equals(achatEntity.getAchatValidee())){
                newAchatList.add(AchatMapper.INSTANCE.toDto(achatEntity));
            } 
        }
        if (newAchatList.isEmpty()){
            throw new EntityNotFoundRestException(String.format("Aucun achat n'a été trouvée pour utilisateur [%s]", id),id);
        }
        return newAchatList;
    }

    public Achat getPanierByAchatId(final int id) {
        AchatEntity achat = achatRepository.findById((long) id).orElse(null);
        if (achat!=null){
            return AchatMapper.INSTANCE.toDto(achat);
        }
        throw new EntityNotFoundRestException(String.format("Aucun achat n'a été trouvée pour l'id [%s]", id),id);
    }

    @Transactional
    public Achat createAchat(CreateAchatRequest entity,String userUid) {
        int nbEtapeTotal=0;
        for (CreateEtapeAchatRequest e : entity.getEtape()) {
            nbEtapeTotal=nbEtapeTotal+e.getNbPlace();
        }
        if(entity.getEtape().isEmpty() || etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival().getNbPlaceRestante()>nbEtapeTotal){
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
            achat.setNbPlace(nbEtapeTotal);
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
        int nbEtapeTotal=0;
        for (CreateEtapeAchatRequest e : entity.getEtape()) {
            nbEtapeTotal=nbEtapeTotal+e.getNbPlace();
        }
        if(entity.getEtape().isEmpty() && nbEtapeTotal ==0){
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
        int nbEtapeTotal=0;
        for (CreateEtapeAchatRequest e : entity.getEtape()) {
            nbEtapeTotal=nbEtapeTotal+e.getNbPlace();
        }
        if (entity.getUserUid()==null){
            entity.setUserUid("empty");
        }
        if(entity.getEtape().isEmpty() && nbEtapeTotal ==0 || etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival().getNbPlaceRestante()>nbEtapeTotal){
            AchatEntity achat = achatRepository.getReferenceById((long) achatId);
            UtilisateurEntity user = UtilisateurMapper.INSTANCE.toEntity(utilisateurService.getUtilisateurById(entity.getUserUid()));
            List<EtapeAchatEntity> etapes= new ArrayList();
            for (CreateEtapeAchatRequest etape : entity.getEtape()) {
                EtapeAchatEntity e =EtapeAchatMapper.INSTANCE.toEntity(etape);
                e.setAchat(achat);
                e.setEtape(etapeRepository.getReferenceById((long) etape.getIdTrajet()));

                EtapeAchatEntity oldEtape = etapeAchatRepository.findById(new EtapeAchatIdEntity(achat.getNumAchat(),e.getEtape().getIdtrajet())).orElse(null);
                if(oldEtape!=null) {
                    oldEtape.setNbPlace(e.getNbPlace());
                    etapes.add(oldEtape);
                }
                else {
                    etapes.add(e);
                }
            }
            achat.setNbPlace(nbEtapeTotal);
            achat.setUtilisateur(user);
            achat.setEtape(etapes);
            return AchatMapper.INSTANCE.toDto(achatRepository.saveAndFlush(achat));
        }
        throw new EntityNotFoundRestException(
            String.format("Pas assez de place restante pour le festival [%s]", 
            etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival()),
            etapeRepository.getReferenceById((long) entity.getEtape().get(0).getIdTrajet()).getOffreCovoiturage().getFestival());

    }

     @Transactional
    public Achat validateAchat(Long achatId) {
        if (achatId == null) {
            throw new IllegalArgumentException("Id Achat est nul");
        }
        AchatEntity achatEntity = achatRepository.findById(achatId)
            .orElseThrow(() -> new EntityNotFoundException("Achat non trouvé: " + achatId));
        if (Boolean.FALSE.equals(achatEntity.getAchatValidee())) {
            achatEntity.setAchatValidee(true);
            achatRepository.save(achatEntity);
        } else {
            throw new IllegalStateException("Achat avec id " + achatId + " est déjà validé.");
        }
        return AchatMapper.INSTANCE.toDto(achatRepository.save(achatEntity));
    }

    public void deleteAchat(Long id){
        if(id != null ){
             Optional<AchatEntity> achat = achatRepository.findById(id);
        if (achat.isPresent()) {
            achatRepository.deleteById(id);
        } else {
            throw new EntityNotFoundException("Achat num : " + id + " n'existe pas");
        }
        }
       
    }
}
