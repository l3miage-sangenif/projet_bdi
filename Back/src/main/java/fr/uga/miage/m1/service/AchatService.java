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
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AchatService {
    private final AchatRepository repository;
    
    public List<Achat> getPanierByUserId(final String id) {
        List<AchatEntity> achatList = repository.findAll();
        List<Achat> newAchatList = new ArrayList();
        for (AchatEntity achatEntity : achatList) {
            if(achatEntity.getUtilisateur().getUserUid().equals(id)){
                newAchatList.add(AchatMapper.INSTANCE.toDto(achatEntity));
            } 
        }
        if (newAchatList.isEmpty()){
            throw new EntityNotFoundRestException(String.format("Aucun achat n'a été trouvée pour utilisateur [%s]", id),id);
        }
        return newAchatList;
    }

   

    
}
