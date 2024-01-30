import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';

import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import { ConnexionComponent } from '../connexion/connexion.component';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {
  constructor ( private dialog: MatDialog, public authService: AuthService, private router: Router){}

  onCreate(){
    if(this.authService.user){
      this.dialog.open(PaymentDialogComponent, { 
      });
    }
    else{
      this.dialog.open(ConnexionComponent, { 
        width: '800px',
      });
    }
  }

  
}

