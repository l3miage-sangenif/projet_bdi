import { Component, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { Achat } from 'src/models/Achat';
import { FestiCarService } from 'src/services/festi-car.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ConfirmUpdateComponent } from '../confirm-update/confirm-update.component';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent {
  @Input() element: Achat;
  total:number=0;
  
  constructor(private dialog: MatDialog, public festiCarService : FestiCarService, private autService : AuthService, private router : Router){}

  Openconfirmer(numAchat: number){
    this.dialog.open(ConfirmDeleteComponent, {
      data: { numAchat: numAchat }
    });
  }

  calculTotalPass():number{

    return this.element.etapeAchat.reduce((elementTotal, etapeAchat) => {
      return elementTotal + etapeAchat.etape.prix * etapeAchat.nbPlace;
    }, 0);
  }

  updatePass(numAchat: number, idFestival){
    const idAchat = numAchat.toString();
    this.router.navigate(['/detailfestival', idFestival]);

    // this.festiCarService.putPanierByAchatId(idAchat, this.autService.user.uid);
  }

  OpenUpdateconfirmer(idFestival: any, numAchat: any){
    this.dialog.open(ConfirmUpdateComponent, {
      data: { idFestival: idFestival,
              numAchat :  numAchat }
    });
  }
}
