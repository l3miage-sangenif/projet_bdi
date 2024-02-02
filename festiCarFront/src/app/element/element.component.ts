import { Component, Input, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { ConfirmDeleteComponent } from '../confirm-delete/confirm-delete.component';
import { Achat } from 'src/models/Achat';
import { FestiCarService } from 'src/services/festi-car.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { ConfirmUpdateComponent } from '../confirm-update/confirm-update.component';
import { Festival } from 'src/models/Festival';
import { PanierServiceService } from 'src/services/panier-service.service';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnInit {
  @Input() elementDuPanierGroupe : { festival: Festival, achats: any[] };
  total:number=0;
  
  constructor(private dialog: MatDialog, public festiCarService : FestiCarService, 
    private autService : AuthService, private router : Router, public panierservice : PanierServiceService){
      
    }
  ngOnInit(): void {
    console.log('elementGroupe11: ', this.elementDuPanierGroupe);
  }



  Openconfirmer(numAchat: number[], festival : Festival){
    this.dialog.open(ConfirmDeleteComponent, {
      data: { numAchat: numAchat,
              festival: festival }
    });
  }

  calculTotalPass(achat : any):number{
    return  (achat.etape.prix + this.elementDuPanierGroupe.festival.tarif) * achat.nbPlace;
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
