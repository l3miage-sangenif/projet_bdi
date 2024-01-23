import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit {
  constructor(public authService: AuthService){}
  ngOnInit(): void {

  }

}
