import { FIREBASE_URL } from '../environments/firebase-url';
import { MyApp } from './../app/app.component';
import { UserLogin } from './../app/objetos/use-login';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus'
import { UtilProvider } from './util';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: Observable<firebase.User>

  constructor(
    private angularFireAuth: AngularFireAuth,
    private googlePlus: GooglePlus,
    private fbDb: AngularFireDatabase
  ) { this.user = angularFireAuth.authState; }

  createUser(user: UserLogin) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  loginWithEmailPassword(user: UserLogin) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  loginWithGoogleAccountWeb() {
    var provider = new firebase.auth.GoogleAuthProvider();
    return this.angularFireAuth.auth.signInWithPopup(provider);
  }

  logginWithGoogle() {
    return this.googlePlus.login({
      'webClientId': '723010978896-k3v3rjtp3on1itcde1knglj90f1v6s92.apps.googleusercontent.com',
      'offline': true
    })  
    .then(res => {
      return this.angularFireAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
        .then((user: firebase.User) => {
          console.log('update profile');
          console.log('user--> '+JSON.stringify(user));
          user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
          return user;
        });
    })
    
    
    //.then(res => {
      //  const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
      //  console.log('firecreds: '+ firecreds);
       // return this.angularFireAuth.auth.signInWithCredential(firecreds)
        //  .then((user: firebase.User) => {
         //   console.log('login token ok');
          //  return user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl })
          //})
         // .catch(ns=>{
          //  console.log('erro aqui' + ns);
          //});
      //})
      .catch((error: any) => {
        console.log('2erro: ' + error);

      })
  }

  loginWithFacebookAccount() {
    var provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope('email');
    //provider.addScope('user_friends');
    //provider.addScope('user_birthday');
    //provider.addScope('user_about_me');
    //provider.addScope('user_education_history');
    provider.addScope('user_friends');
    return this.angularFireAuth.auth.signInWithPopup(provider);
  }


  //sair todos os providers
  sigOut() {
    if (this.angularFireAuth.auth.currentUser.providerData.length) {
      for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
        var provider = this.angularFireAuth.auth.currentUser.providerData[i];

        try {
          if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
            //logout - somente faz logout - dsconnect faz logout e limpa a conta 
            return this.googlePlus.disconnect()
              .then(() => {
                return this.sigOutFirebase();
              })
          }
        } catch (error) {
          console.log('erro logout:'+error)
        }


      }
    }
    return this.sigOutFirebase();
  }


  sigOutFirebase() {
    return this.angularFireAuth.auth.signOut();
  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  existeUsuario() {
    console.log('....13');
    let userId = this.angularFireAuth.auth.currentUser.uid;
    console.log('uid current: '+ userId);

    this.fbDb.database.ref(FIREBASE_URL.PATH_USER).child(userId).once('value', function (snapshot) {
      var exists = (snapshot.val() !== null);
      
      if (exists) {
        return true;
      } else {
        return false;
      }

    });
  }



}
