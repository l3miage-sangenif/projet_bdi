package fr.uga.miage.m1.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.uga.miage.m1.models.OffreCovoiturageEntity;

@Repository
public interface OffreCovoiturageRepository extends JpaRepository<OffreCovoiturageEntity, Long> {

    @Query(value = "SELECT DISTINCT * FROM offre_covoiturage WHERE offre_covoiturage.NB_PLACE_RESTANTE>=?2 AND offre_covoiturage.id_festival=?1", nativeQuery = true)
    List<OffreCovoiturageEntity> findAll(long id,int nbPlace);

    @Query(value = "SELECT DISTINCT offre_covoiturage.* FROM offre_covoiturage join Etape ON etape.ID_OFFRE_COVOITURAGE = offre_covoiturage.ID_OFFRE_COVOITURAGE join Lieu_covoiturage ON etape.id_lieu = Lieu_covoiturage.id_lieu WHERE offre_covoiturage.NB_PLACE_RESTANTE>=?5 AND offre_covoiturage.id_festival=?1 AND Lieu_covoiturage.LATITUDE IS NOT NULL AND Lieu_covoiturage.LONGITUDE IS NOT NULL AND SQRT(POWER((?2-Lieu_covoiturage.longitude)*COS((?3+Lieu_covoiturage.latitude)/2)* 3.14159265359/180,2)+POWER(?3-Lieu_covoiturage.latitude,2))*1.852*60<?4", nativeQuery = true)
    List<OffreCovoiturageEntity> findAllDistance(long id,float longitude, float latiture,int distance,int nbPlace);
}