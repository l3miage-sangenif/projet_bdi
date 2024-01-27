package fr.uga.miage.m1.mapper;

import fr.uga.miage.m1.DTO.Utilisateur;
import fr.uga.miage.m1.models.UtilisateurEntity;
import fr.uga.miage.m1.request.CreateUserRequest;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;


@Mapper(uses = AchatMapper.class)
public interface UtilisateurMapper {

    UtilisateurMapper INSTANCE = Mappers.getMapper(UtilisateurMapper.class);

    Utilisateur toDto(UtilisateurEntity user);

    UtilisateurEntity toEntity(Utilisateur userDTO);

    UtilisateurEntity toEntity(CreateUserRequest userDTO);
    
}
