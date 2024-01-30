package fr.uga.miage.m1.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.uga.miage.m1.models.OrganisateurEntity;

@Repository
public interface OrganisateurRepository extends JpaRepository<OrganisateurEntity, String> {
}