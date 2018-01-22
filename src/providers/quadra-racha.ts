import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

/*
  Generated class for the QuadraRachaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuadraRachaProvider {

  listaQuadars: Observable<any>;
  
  constructor(private afDataBase: AngularFireDatabase) {
    console.log('Hello QuadraRachaProvider Provider');
  }

  listarQuadras(){

  }

  listaRachas(){

  }

  buscarFavoritos(){
    
  }



}
