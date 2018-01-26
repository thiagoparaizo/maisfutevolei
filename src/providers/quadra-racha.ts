import { UsuarioProvider } from './usuario';
import { FIREBASE_URL } from './../environments/firebase-url';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfile } from '../objetos/user-profile';

/*
  Generated class for the QuadraRachaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuadraRachaProvider {

  listaQuadars: Observable<any[]>;
  
  constructor(private afDataBase: AngularFireDatabase, private usuarioProvider: UsuarioProvider) {
    console.log('Hello QuadraRachaProvider Provider');
  }

  listarAllQuadras(){
    console.log("listarAllQuadras >>");
    let url = FIREBASE_URL.PATH_LISTA_QUADRAS_ESTADO.replace(/{estado}/gi, "CE");
    console.log("url: "+ url);
    return this.afDataBase.list(url).valueChanges();
  }

  listarAllRachas(){
    console.log("listarAllQuadras >>");
    let url = FIREBASE_URL.PATH_LISTA_RACHAS_ESTADO.replace(/{estado}/gi, "CE");
    console.log("url: "+ url);
    return this.afDataBase.list(url).valueChanges();
  }



  listarFavoritosQuadras(){

  }

  listarFavoritosRachas(){

  }

  buscarFavoritos(){
    
  }



}
