import { Injectable} from '@angular/core';
import {FacebookAuthProvider, User, getAuth, signInWithPopup, signOut} from 'firebase/auth';
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

  async FacebookAuth() {
    const firebaseConfig = environment.firebase;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
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
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

}

