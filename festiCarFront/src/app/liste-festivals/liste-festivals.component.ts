import { Component } from '@angular/core';
import { Festival } from 'src/models/Festival';
import { FestiCarService } from 'src/services/festi-car.service';

@Component({
  selector: 'app-liste-festivals',
  templateUrl: './liste-festivals.component.html',
  styleUrls: ['./liste-festivals.component.scss']
})
export class ListeFestivalsComponent {
  festivalsTab? : Festival[];

  constructor(public festivalCarService : FestiCarService){

  }

  name? : string;
  date? : Date;
  lieu? : string;


  // public getAllFestivals(nomFestival: string, lieu: string, date: any): void {
  //   this.festivalCarService.getAllFestival().subscribe((data) =>{
  //     if(data){
  //       if(nomFestival)
  //     }
  //   }

  //     );
  // }

}
