import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Festival } from 'src/models/Festival';
import { FestiCarService } from 'src/services/festi-car.service';


@Component({
  selector: 'app-liste-festivals',
  templateUrl: './liste-festivals.component.html',
  styleUrls: ['./liste-festivals.component.scss']
})
export class ListeFestivalsComponent implements OnInit {
  festivalsTab? : Festival[];
  festivalsSubscription: Subscription;
  pagedFestivals: Festival[] = [];
  pageSize = 10;
  pageSizeOptions = [5, 10, 20, 50, 100];
  totalFestivals = 0;

  constructor(public festivalCarService : FestiCarService){
  }

  ngOnInit(): void {
    this.getAllFestivals();
    this.pageSize = this.pageSizeOptions[0];
  }

  public getAllFestivals(): void {
    this.festivalsSubscription = this.festivalCarService.getAllFestival().subscribe({
      next: (data: any) => {
        this.festivalsTab = data;
        this.totalFestivals = this.festivalsTab.length;
        this.updatePagedFestivals(0);
      },
      error: (error: any) => {
        console.error('Error fetching festivals:', error);
      }
    });
  }

  getUrl(festival : Festival): string{
    var src : string = "";
    if(festival.sousDomaine.domaine.nomDomaine === "Musiques actuelles"){
       src="assets/images/musiquesActuelles.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Livre et littérature"){
      src="assets/images/livreEtLiterature.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Cirque et Arts de la rue"){
      src="assets/images/cirqueEtArt.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Pluridisciplinaire Spectacle vivant"){
      src="assets/images/spectacleVivant.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Cinéma et audiovisuel"){
      src="assets/images/cinemaEtAudiovisuel.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Transdisciplinaire"){
      src="assets/images/trandisciplinaire.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Arts plastiques et visuels"){
      src="assets/images/artPlastiques.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Divers spectacle vivant"){
      src="assets/images/diversEtVivant.jpg";
    }
    else if(festival.sousDomaine.domaine.nomDomaine === "Danse"){
      src="assets/images/danse.jpg";
    }
    return src;
  }

  public updatePagedFestivals(pageIndex: number): void {
    const startIndex = pageIndex * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.totalFestivals);
    this.pagedFestivals = this.festivalsTab.slice(startIndex, endIndex);
  }

  public onPageChange(event: any): void {
    this.pageSize = event.pageSize;
    this.updatePagedFestivals(event.pageIndex);
  }

  ngOnDestroy(): void {
    if (this.festivalsSubscription) {
      this.festivalsSubscription.unsubscribe();
    }
  }

}
