import { Injectable} from '@angular/core';
import {FacebookAuthProvider, GoogleAuthProvider, User, browserSessionPersistence, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import { PanierServiceService } from './panier-service.service';

interface UserInfoForPayment {
  name: string;
  email: string;
  number?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {

   
  user?: User;
  photo : string | null = "";
  userId : string | undefined;
  userName : string | undefined;

  constructor(private panierService: PanierServiceService) {
    const auth = getAuth();
    auth.setPersistence(browserSessionPersistence); 
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
        this.photo = this.user.photoURL;
        this.userId = this.user.uid;
        this.userName = this.user.displayName;
      } else {
        this.user = null;
      }
    });
  }

 

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
      this.panierService.viderPanier();
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
      return result.user;
    } catch (error) {
      throw error;
    }
  }


  getUserInfo(): UserInfoForPayment {
    return {
      name: this.user.displayName,
      email: this.user.email,
      number: this.user.phoneNumber
    };
  }

}

