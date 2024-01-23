import { Injectable} from '@angular/core';
import {FacebookAuthProvider, getAuth, getRedirectResult, signInWithPopup, signInWithRedirect} from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root',
})
export class AuthService {

   provider = new FacebookAuthProvider();

  constructor(
    private afAuth: AngularFireAuth,
    private router : Router
  ) {}

  async FacebookAuth() {
    console.log('nabou');
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log('user', user);
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential.accessToken;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = FacebookAuthProvider.credentialFromError(error);
    });
  }

}

