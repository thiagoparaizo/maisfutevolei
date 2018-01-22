import { UsuarioProvider } from './usuario';
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
import { Facebook } from '@ionic-native/facebook';

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
    private facebook: Facebook,
    private fbDb: AngularFireDatabase,
    private usuarioProvider: UsuarioProvider,
    private utilProvider: UtilProvider
    
  ) { this.user = angularFireAuth.authState; }





  createUser(user: UserLogin) {
    return this.angularFireAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  }

  loginWithEmailPassword(user: UserLogin) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

  loginWithGoogleAccountWeb() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.addScope('https://www.googleapis.com/auth/plus.me');

    return this.angularFireAuth.auth.signInWithPopup(provider)
      .then((user: firebase.User) => { return user; });
  }

  loginWithFacebookAccountWeb() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    //provider.addScope('user_friends');
    provider.addScope('user_birthday');
    //provider.addScope('user_about_me');
    //provider.addScope('user_education_history');
    provider.addScope('user_friends');
    return this.angularFireAuth.auth.signInWithPopup(provider)
      .then((result => { return result.user; }))
      .catch(error =>{
        this.tratarErroLogin(error);
          console.log("Firebase failure: " + JSON.stringify(error));
      });
  }

  facebookLogin(){
    return this.facebook.login(['email']).then( (response) => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

        return firebase.auth().signInWithCredential(facebookCredential)
        .then((success) => {
            
          console.log("Firebase success: " + JSON.stringify(success));
            //this.userProfile = success;
            return success;
        })
        .catch((error) => {
          this.tratarErroLogin(error);
          console.log("Firebase failure: " + JSON.stringify(error));
        });

    }).catch((error) => {
      if(error == 'cordova_not_available'){
        console.log('error: cordova_not_available. Tentando login Web...');
        return this.loginWithFacebookAccountWeb();
       }else{
         this.tratarErroLogin(error);
         console.log("Firebase failure: " + JSON.stringify(error));
       }
     });
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
            console.log('user--> ' + JSON.stringify(user));
            user.updateProfile({ displayName: res.displayName, photoURL: res.imageUrl });
            return user;
          })
          .catch((error) => {
            this.tratarErroLogin(error);
            console.log("Firebase failure: " + JSON.stringify(error));
          });
      })
      .catch((error) => {
        if(error == 'cordova_not_available'){
         console.log('error: cordova_not_available. Tentando login Web...');
         return this.loginWithGoogleAccountWeb();
        }else{
          this.tratarErroLogin(error);
          console.log("Firebase failure: " + JSON.stringify(error));
        }
      });
 
  }

  //sair todos os providers
  signOut() {
    console.log('signOut >>');

    try {

      if (this.angularFireAuth.auth.currentUser.providerData.length) {
        console.log('a2:' + this.angularFireAuth.auth.currentUser.providerData.length);
        for (var i = 0; i < this.angularFireAuth.auth.currentUser.providerData.length; i++) {
          var provider = this.angularFireAuth.auth.currentUser.providerData[i];
          console.log('a3:' + provider);
          try {
            if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
              //logout - somente faz logout - dsconnect faz logout e limpa a conta 
              return this.googlePlus.disconnect()
                .then(() => {
                  return this.sigOutFirebase();
                }).catch(error => {
                  console.log('a4');
                })
            }
          } catch (error) {
            console.log('erro logout:' + error)
          }
        }
      }


    } catch (ex) {

      console.log('catch..');
      try {
      this.angularFireAuth.auth.onAuthStateChanged(user => {
        for (var i = 0; i < user.providerData.length; i++) {
          var provider = user.providerData[i];
          console.log('a3:' + provider);
         
            if (provider.providerId == firebase.auth.GoogleAuthProvider.PROVIDER_ID) {
              //logout - somente faz logout - dsconnect faz logout e limpa a conta 
              return this.googlePlus.disconnect()
                .then(() => {
                  return this.sigOutFirebase();
                }).catch(error => {
                  console.log('a4');
                })
            }
          
        }
      

      });
    }catch (error) {
      console.log('erro logout:' + error)
    }
    }
    

    return this.sigOutFirebase();
  }


  sigOutFirebase() {
    try {

      return this.angularFireAuth.auth.signOut();
    } catch (error) {
      console.log('b');
    }

  }

  resetPassword(email: string) {
    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  tratarErroLogin(error){
    if(error.code == 'auth/account-exists-with-different-credential'){
      this.utilProvider.showToastError('Parece que não é a primeira vez que você fez login por aqui. Tente usar um modo de login diferente.',6000,'middle');            
    }else if(error && error.code){
      this.utilProvider.showToastError('Erro no login ['+error.code+']',6000,'middle');            
    }else{
      this.utilProvider.showToastError('Erro inesperado no login. Tente novamente em alguns instantes.',6000,'middle');            
    }

  }


}
