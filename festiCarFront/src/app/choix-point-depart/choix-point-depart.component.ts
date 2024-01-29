import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-choix-point-depart',
  templateUrl: './choix-point-depart.component.html',
  styleUrls: ['./choix-point-depart.component.scss']
})

export class ChoixPointDepartComponent {
  constructor(private dialog: MatDialog){}
  close(){
    this.dialog.closeAll();
  }
}
