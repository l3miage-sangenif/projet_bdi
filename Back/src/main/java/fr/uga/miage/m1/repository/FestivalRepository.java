package fr.uga.miage.m1.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import fr.uga.miage.m1.models.FestivalEntity;

@Repository
public interface FestivalRepository extends JpaRepository<FestivalEntity, Long> {

    @Query(value = "SELECT DISTINCT festival.* FROM festival join offre_covoiturage ON festival.ID_FESTIVAL = offre_covoiturage.ID_FESTIVAL WHERE date_fin>CURRENT_DATE AND festival.NB_PLACE_RESTANTE>?1", nativeQuery = true)
    List<FestivalEntity> findAll(int nbPlace);

    @Query(value = "SELECT DISTINCT festival.* FROM festival join offre_covoiturage ON festival.ID_FESTIVAL = offre_covoiturage.ID_FESTIVAL join Etape ON etape.ID_OFFRE_COVOITURAGE = offre_covoiturage.ID_OFFRE_COVOITURAGE join Lieu_covoiturage ON etape.id_lieu = Lieu_covoiturage.id_lieu WHERE date_fin>CURRENT_DATE AND festival.NB_PLACE_RESTANTE>?4 AND Lieu_covoiturage.LATITUDE IS NOT NULL AND Lieu_covoiturage.LONGITUDE IS NOT NULL AND SQRT(POWER((?1-Lieu_covoiturage.longitude)*COS((?2+Lieu_covoiturage.latitude)/2)* 3.14159265359/180,2)+POWER(?2-Lieu_covoiturage.latitude,2))*1.852*60<?3", nativeQuery = true)
    List<FestivalEntity> findAllWithCovoiturage(float longitude, float latiture,int distance,int nbPlace);

}