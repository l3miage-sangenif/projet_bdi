import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { OffreCovoirage } from 'src/models/OffreCovoiturage';
import { ShareDataService } from 'src/services/share-data.service';

@Component({
  selector: 'app-liste-covoiturages',
  templateUrl: './liste-covoiturages.component.html',
  styleUrls: ['./liste-covoiturages.component.scss']
})
export class ListeCovoituragesComponent implements OnDestroy {
  covoiturageTab? : OffreCovoirage[] = [];
  festivalsSubscription: Subscription;
 


  constructor(private route: ActivatedRoute, private sharedDataService: ShareDataService){
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
    console.log("heureParam",dateString);
    console.log("heureResult",utcHour, utcMinutes);
    return `${utcHour}:${utcMinutes}`;

}
}
