import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { first } from 'rxjs/operators'
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }
  
  constructor(
    public afAuth: AngularFireAuth
  ) { }
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}