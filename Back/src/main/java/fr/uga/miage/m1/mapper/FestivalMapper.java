package fr.uga.miage.m1.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

import fr.uga.miage.m1.dto.Festival;
import fr.uga.miage.m1.models.FestivalEntity;

@Mapper
public interface FestivalMapper {

    FestivalMapper INSTANCE = Mappers.getMapper(FestivalMapper.class);

    Festival toDto(FestivalEntity festivalEntity);

    FestivalEntity toEntity(Festival festival);

}
