import { Usuario } from './../objetos/usuario';
import { Racha } from './../objetos/racha';
import { Quadra } from './../objetos/quadra';
import { UsuarioProvider } from './usuario';
import { FIREBASE_URL } from './../environments/firebase-url';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserProfile } from '../objetos/user-profile';

/*
  Generated class for the QuadraRachaProvider provider.
  addRacha(arg0: any): any {
    throw new Error("Method not implemented.");  addRacha(arg0: any): any {
    throw new Error("Method not implemented.");
  }

  }

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuadraRachaProvider {

  public listaQuadras: Observable<any[]>;
  public listaRachas: Observable<any[]>;
  //listaQuadars: Observable<any[]>;
  public filtrosBusca: any;
  public filtroBuscaTexto: string = null;
  public filtroBuscaDistancia: string = null;

  constructor(private afDataBase: AngularFireDatabase, private usuarioProvider: UsuarioProvider) {
    console.log('Hello QuadraRachaProvider Provider');
  }

  addQuadra(quadra: Quadra) {
    console.log("addQuadra >>");
    let url = FIREBASE_URL.PATH_LISTA_QUADRAS_ESTADO.replace(/{estado}/gi, quadra.estado);
    console.log("url: " + url);
    let key = this.afDataBase.list(url).push(quadra).key;
    console.log('key: ' + key);
    return key;
  }

  addRacha(racha: Racha) {
    console.log("addQuadra >>");
    let url = FIREBASE_URL.PATH_LISTA_RACHAS_ESTADO.replace(/{estado}/gi, "SP");
    console.log("url: " + url);
    let key = this.afDataBase.list(url).push(racha).key;
    console.log('key: ' + key);
    return key;
  }

  listarAllQuadras(estadoParam: string) {
    console.log("listarAllQuadras >>" + estadoParam);
    let url: string;
    let estado: string;

    if (!estadoParam) {
      console.log('listarAllQuadras[1]');
      if (!this.usuarioProvider.usuario) {
        console.log('listarAllQuadras[2]');
         this.usuarioProvider.recuperarDadosUsuario().then(result => {
          console.log('listarAllQuadras[3] ' + result.val().dados_pessoais.estado);
          estado = result.val().dados_pessoais.estado;
          url = FIREBASE_URL.PATH_LISTA_QUADRAS_ESTADO.replace(/{estado}/gi, estado);
          console.log("url: " + url);
         this.listaQuadras = this.afDataBase.list(url).valueChanges();

        });
      } else {
        console.log('listarAllQuadras[4]');
        estado = this.usuarioProvider.usuario.dados_pessoais.estado;
        url = FIREBASE_URL.PATH_LISTA_QUADRAS_ESTADO.replace(/{estado}/gi, estado);
          console.log("url: " + url);
          this.listaQuadras = this.afDataBase.list(url).valueChanges();
         
          
      }
    } else {
      console.log('listarAllQuadras[5]');
      estado = estadoParam;
      url = FIREBASE_URL.PATH_LISTA_QUADRAS_ESTADO.replace(/{estado}/gi, estado);
      console.log("url: " + url);
      this.listaQuadras = this.afDataBase.list(url).valueChanges();
          
    }
    
   

  }

  listarAllRachas(estadoParam: string) {
    console.log("listarAllRachas >>" + estadoParam);
    let url: string;
    let estado: string;

    
    if (!estadoParam) {
      console.log('listarAllRachas[1]');
      if (!this.usuarioProvider.usuario) {
        console.log('listarAllRachas[2]');
         this.usuarioProvider.recuperarDadosUsuario().then(result => {
          console.log('listarAllRachas[3] ' + result.val().dados_pessoais.estado);
          estado = result.val().dados_pessoais.estado;
          url = FIREBASE_URL.PATH_LISTA_RACHAS_ESTADO.replace(/{estado}/gi, estado);
          console.log("url: " + url);
          this.listaRachas = this.afDataBase.list(url).valueChanges();

        });
      } else {
        console.log('listarAllRachas[4]');
        estado = this.usuarioProvider.usuario.dados_pessoais.estado;
        url = FIREBASE_URL.PATH_LISTA_RACHAS_ESTADO.replace(/{estado}/gi, estado);
          console.log("url: " + url);
          this.listaRachas = this.afDataBase.list(url).valueChanges();
      }
    } else {
      console.log('listarAllRachas[5]');
      estado = estadoParam;
      url = FIREBASE_URL.PATH_LISTA_RACHAS_ESTADO.replace(/{estado}/gi, estado);
      console.log("url: " + url);
      this.listaRachas =  this.afDataBase.list(url).valueChanges();
    }

  }



  listarFavoritosQuadras() {

  }

  listarFavoritosRachas() {

  }

  buscarFavoritos() {

  }



}
