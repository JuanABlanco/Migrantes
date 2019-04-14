import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

//Modelos:
import {User} from '../models/user'

//Observables:
import {switchMap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  User: Observable<User>;
  token: string;

  constructor(
    public afAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { 
    //Se comprueba si el usuario esta correctamente logeado en la aplicación:
    this.User = this.afAuth.authState.pipe(switchMap(User => 
      {
        //Usuario conectado:
        if( User )
        {
          return this.firestore.doc<User>(`users/${User.uid}`).valueChanges();
        }
        //Usuario desconectado:
        else 
        {
          return of(null);
        }
      }))
  }

  public signUp(email, password)
  {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }
  public emailAndPassword(email, password)
  {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  //Método para cerrar sesión:
  public signOut() 
  {
    this.afAuth.auth.signOut().then(() => 
    this.router.navigate(['/']));
  }

    //Recuperar contraseña
    public ForgotPassword(email)
    {
      this.afAuth.auth.sendPasswordResetEmail(email).then(function() {
      alert("email sent")
      }).catch(function(error) {
        alert(error.message);
      });
    }
}