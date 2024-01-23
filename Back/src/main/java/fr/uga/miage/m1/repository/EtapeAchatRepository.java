package fr.uga.miage.m1.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.uga.miage.m1.models.EtapeAchatEntity;
import fr.uga.miage.m1.models.EtapeAchatIdEntity;

@Repository
public interface EtapeAchatRepository extends JpaRepository<EtapeAchatEntity, EtapeAchatIdEntity> {
}