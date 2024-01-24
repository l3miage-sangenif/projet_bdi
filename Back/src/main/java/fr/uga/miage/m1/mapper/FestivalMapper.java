package fr.uga.miage.m1.mapper;

import lombok.NonNull;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.springframework.stereotype.Component;

import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;

@Mapper
public interface FestivalMapper {

    Festival toDto(FestivalEntity festivalEntity);

    FestivalEntity toEntity(Festival festival);
    
}
