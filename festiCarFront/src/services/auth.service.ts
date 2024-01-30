import { Injectable} from '@angular/core';
import {FacebookAuthProvider, GoogleAuthProvider, User, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import { FestiCarService } from './festi-car.service';
import { PostUser } from 'src/models/PostUser';
import { Subscription } from 'rxjs';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

  
  user?: User;
  photo : string | null = "";
  userId : string | undefined;
  userName : string | undefined;


  constructor() {}

  async facebookAuth() {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      this.user = result.user;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
      this.userName = this.user.displayName;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData?.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    }
  }
  async logOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      this.user = null;
    }).catch((error) => {
      // An error happened.
    });
  }

  async googleConnection(): Promise<User> {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      this.user = result.user;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
      this.userName = this.user.displayName;
      
      // Créer un utilisateur
      // this.postUser.userUid = this.user.providerId;
      // const userNameParts = this.userName.split(' ');
      // this.postUser.nom = userNameParts[1];
      // this.postUser.prenom = userNameParts[0];
      // this.postUser.email = this.user.email;
      // this.postUser.numTelephone = this.user.phoneNumber;
  
      return result.user;
    } catch (error) {
      // Gérer les erreurs ici si nécessaire
      throw error; // Remarque : vous pouvez choisir de gérer l'erreur ici ou de laisser la fonction caller gérer l'erreur
    }
  }

}

