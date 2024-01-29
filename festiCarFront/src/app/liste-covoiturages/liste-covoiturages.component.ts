import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog} from '@angular/material/dialog';

import { OffreCovoirage } from 'src/models/OffreCovoiturage';
import { ShareDataService } from 'src/services/share-data.service';
import { ChoixPointDepartComponent } from '../choix-point-depart/choix-point-depart.component';

@Component({
  selector: 'app-liste-covoiturages',
  templateUrl: './liste-covoiturages.component.html',
  styleUrls: ['./liste-covoiturages.component.scss']
})
export class ListeCovoituragesComponent implements OnDestroy {
  covoiturageTab? : OffreCovoirage[] = [];
  festivalsSubscription: Subscription;
 

  constructor(private route: ActivatedRoute, private sharedDataService: ShareDataService, private dialog: MatDialog){
    this.festivalsSubscription = this.sharedDataService.covoiturageTab$.subscribe((data) => {
        this.covoiturageTab = data;
      });
  }


  ngOnDestroy(): void {
    if (this.festivalsSubscription) {
      this.festivalsSubscription.unsubscribe();
    }
  }
 

  public extractHourFromDate(dateString: string): string {
    const date = new Date(dateString);
    const utcHour = date.getUTCHours().toString().padStart(2, '0');
    const utcMinutes = date.getUTCMinutes().toString().padStart(2, '0');
  
    return `${utcHour}:${utcMinutes}`;

}
public ouvrirCovoiturage(offreCovoiturage: OffreCovoirage): void {
  const dialogRef = this.dialog.open(ChoixPointDepartComponent, {
    data: offreCovoiturage // Pass the selected covoiturage to the dialog
  });
}

}
