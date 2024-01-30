


import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { TitleStrategy } from '@angular/router';


@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.scss']
})
export class ConfirmDeleteComponent {

  constructor(private dialog: MatDialog){}
  close(){
    this.dialog.closeAll();
  }

}
