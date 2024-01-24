package fr.uga.miage.m1.mapper;

import lombok.NonNull;

import org.aspectj.weaver.ast.Test;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

import fr.uga.miage.m1.DTO.Festival;
import fr.uga.miage.m1.models.FestivalEntity;

@Mapper
public interface FestivalMapper {

    FestivalMapper INSTANCE = Mappers.getMapper(FestivalMapper.class);

    Festival toDto(FestivalEntity festivalEntity);

    FestivalEntity toEntity(Festival festival);

    void mergeTestEntity(@MappingTarget @NonNull FestivalEntity festivalEntity, Festival festival);

    
}
