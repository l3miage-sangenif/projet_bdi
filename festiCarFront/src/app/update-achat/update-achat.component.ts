import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Achat } from 'src/models/Achat';
import { ShareDataService } from 'src/services/share-data.service';
import { Location as AngularLocation } from '@angular/common';
import { FestiCarService } from 'src/services/festi-car.service';
import { Festival } from 'src/models/Festival';
import { EtapeAchat } from 'src/models/EtapeAchat';


@Component({
  selector: 'app-update-achat',
  templateUrl: './update-achat.component.html',
  styleUrls: ['./update-achat.component.scss']
})
export class UpdateAchatComponent {
  achatToUpdate : Achat;
  festivalId: number;
  festival: Festival;
  etapeAchat: EtapeAchat;
  
  constructor(public festiCarService : FestiCarService, private route: ActivatedRoute, public shareData : ShareDataService, private router : Router,private location: AngularLocation, public festicarService : FestiCarService){
    this.achatToUpdate = this.shareData.getupdateAchat();
    console.log('achatToUpdate: ', this.achatToUpdate);
  }

  allerpanier(){
    this.router.navigate(['/panier']);
  }


  alleraccueil(){
    this.location.back();

  }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        this.festivalId = +params['id'];
        this.festiCarService.getAllFestivalById(this.festivalId).subscribe({
          next: (data) => {
            this.festival = data;
          },
          error: (error) => {
            console.error('Error fetching festival:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching festival ID:', error);
      }
    }
    );
  }

 
  
  

}