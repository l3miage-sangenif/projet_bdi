import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatDialogRef } from '@angular/material/dialog';
import { PostUser } from 'src/models/PostUser';
import { AuthService } from 'src/services/auth.service';
import { FestiCarService } from 'src/services/festi-car.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }}
@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
  postUser : PostUser;

  constructor( public dialogRef: MatDialogRef<ConnexionComponent>, public authService: AuthService, private festiCarService : FestiCarService){ 
    this.postUser = { userUid: '', nom: '', prenom: '', numTelephone: '', email: '' };
  }

  nameFormControl = new FormControl('', [Validators.required]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();
  close(){
    this.dialogRef.close();
  }

  public loginWithGoogle(){
    this.authService.googleConnection().then(result => {
      this.postUser.userUid = result.uid;
      const userNameParts = result.displayName.split(' ');
      this.postUser.nom = userNameParts[1];
      this.postUser.prenom = userNameParts[0];
      this.postUser.email = result.email;
      this.postUser.numTelephone = result.phoneNumber;
  

      this.festiCarService.postUser(this.postUser).subscribe({
        next: (response: any) => {
          console.log('Utilisateur créé avec succès :', response);

        },
        error: (error: any) => {
          console.error('Erreur lors de la création de l\'utilisateur :', error);
          console.log('post erreur user', this.postUser);
        },
        complete: () => {
          console.log('Appel terminé.'); 
        }
      });

    });

    this.close();
  }


  public loginWithFacebook(){
    this.authService.facebookAuth();
    this.close();
  }
}

