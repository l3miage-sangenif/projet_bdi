import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from 'src/services/auth.service';
import { ConnexionComponent } from '../connexion/connexion.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {

  constructor(public authService: AuthService, private dialog: MatDialog, private router: Router){}

  photo = this.authService.photo;
  userId = this.authService.userId;
  userName = this.authService.userName;
  connexion(){
     this.dialog.open(ConnexionComponent, {
      width: '800px',
    });
  }
  alleraccueil(){
    this.router.navigate(['/AccueilComponent']);
  }
  allerpanier(){
    this.router.navigate(['/PanierComponent']);
    
  }
}

