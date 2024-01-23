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


  // Sign in with Facebook
  async FacebookAuth() {
    console.log('nabou');
    const provider = new FacebookAuthProvider();
    const auth = getAuth();
    signInWithRedirect(auth, provider);

    getRedirectResult(auth)
    .then((result) => {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    console.log('user:', user.displayName)
    }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
    // ...
  });
  }

}

