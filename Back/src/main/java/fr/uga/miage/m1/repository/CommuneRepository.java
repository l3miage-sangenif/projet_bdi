package fr.uga.miage.m1.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.uga.miage.m1.models.CommuneEntity;

@Repository
public interface CommuneRepository extends JpaRepository<CommuneEntity, Long> {
}