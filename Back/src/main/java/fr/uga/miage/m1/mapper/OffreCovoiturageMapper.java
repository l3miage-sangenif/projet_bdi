package fr.uga.miage.m1.mapper;

import lombok.NonNull;

import org.aspectj.weaver.ast.Test;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import fr.uga.miage.m1.DTO.OffreCovoiturage;
import fr.uga.miage.m1.models.OffreCovoiturageEntity;

@Mapper(uses=EtapeMapper.class)
public interface OffreCovoiturageMapper{

    OffreCovoiturageMapper INSTANCE = Mappers.getMapper(OffreCovoiturageMapper.class);

    OffreCovoiturage toDto(OffreCovoiturageEntity offreCovoiturageEntity);

    OffreCovoiturageEntity toEntity(OffreCovoiturage offreCovoiturage);

}
