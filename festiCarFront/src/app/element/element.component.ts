import { Component, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { Achat } from 'src/models/Achat';
import { FestiCarService } from 'src/services/festi-car.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: Achat;
  
  constructor(private dialog: MatDialog, public festiCarService : FestiCarService){}

  Openconfirmer(){
    this.dialog.open(ConfirmDeleteComponent);
    console.log('élément ajouté dans le panier:', this.element);
  }
}
