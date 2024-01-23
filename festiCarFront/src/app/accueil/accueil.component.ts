import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

    eventItems = [
      {
        imageSrc: "assets/images/Group10.png"
      },
      {
        imageSrc: "assets/images/Group11.png"
      },
      {
        imageSrc: "assets/images/Group12.png"
      },
      {
        imageSrc: "assets/images/Group13.png"
      },
      {
        imageSrc: "assets/images/Group14.png"
      },
      {
        imageSrc: "assets/images/Group15.png"
      },
    ];

}
