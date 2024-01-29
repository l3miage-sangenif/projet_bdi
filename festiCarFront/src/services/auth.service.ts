import { Injectable} from '@angular/core';
import {FacebookAuthProvider, GoogleAuthProvider, User, getAuth, signInWithPopup, signOut} from 'firebase/auth';
import { environment } from 'src/environments/environment';
import { initializeApp } from 'firebase/app';



@Injectable({
  providedIn: 'root',
})
export class AuthService {

   user?: User;

  photo : string | null = "";
  userId : string | undefined;
  userName : string | undefined;

  constructor(
  ) {}

  async facebookAuth() {
    const auth = getAuth();
    const provider = new FacebookAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      this.user = result.user;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
      this.userName = this.user.displayName;
      console.log('userUrl:', result.user.photoURL);
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

  async googleConnection(){
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    this.user = result.user;
    this.photo = this.user.photoURL;
    this.userId = this.user.uid;
    this.userName = this.user.displayName;
    console.log('userUrl:', result.user.photoURL);
    console.log('usergoogle', result)
    }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    });
  }

}

