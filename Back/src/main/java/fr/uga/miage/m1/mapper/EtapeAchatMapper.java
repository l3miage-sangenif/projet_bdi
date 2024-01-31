package fr.uga.miage.m1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import fr.uga.miage.m1.DTO.EtapeAchat;
import fr.uga.miage.m1.models.EtapeAchatEntity;
import fr.uga.miage.m1.request.CreateEtapeAchatRequest;

@Mapper
public interface EtapeAchatMapper {

    EtapeAchatMapper INSTANCE = Mappers.getMapper(EtapeAchatMapper.class);

    EtapeAchatEntity toEntity(CreateEtapeAchatRequest etapeAchatRequest);

    EtapeAchat toDto(EtapeAchatEntity etapeAchatEntity);
    
}
