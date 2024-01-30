import { Component, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: any;
  
  constructor(private dialog: MatDialog){}

  Openconfirmer(){
    this.dialog.open(ConfirmDeleteComponent);
  }
}
