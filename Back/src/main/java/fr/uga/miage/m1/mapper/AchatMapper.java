package fr.uga.miage.m1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import fr.uga.miage.m1.DTO.Achat;
import fr.uga.miage.m1.models.AchatEntity;

@Mapper
public interface AchatMapper {

    AchatMapper INSTANCE = Mappers.getMapper(AchatMapper.class);

    Achat toDto(AchatEntity achat);

    AchatEntity toEntity(Achat achat);
    
}
