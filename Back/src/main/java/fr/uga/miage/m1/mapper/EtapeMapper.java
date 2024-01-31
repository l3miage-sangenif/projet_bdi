package fr.uga.miage.m1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import fr.uga.miage.m1.DTO.Etape;
import fr.uga.miage.m1.models.EtapeEntity;

@Mapper
public interface EtapeMapper{

    EtapeMapper INSTANCE = Mappers.getMapper(EtapeMapper.class);

    Etape toDto(EtapeEntity etapeEntity);

    EtapeEntity toEntity(Etape etape);

}
