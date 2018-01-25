import { Usuario } from './../objetos/usuario';
import { UtilProvider } from './util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { FIREBASE_URL } from '../environments/firebase-url';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public usuarioLogado:boolean = false;
  public userProfile: any;
  public tokenUsuario: any = null;


  constructor(private afDataBase: AngularFireDatabase, private angularFireAuth: AngularFireAuth,
  private utilProvider: UtilProvider) {
    
    console.log('construtor usuario provider');
    
  }

  setarInformacoesUsuario(user:any){
    console.log('setarInformacoesUsuario >>');
    if(user){

      if(user.user){
        user = user.user;
      }

      this.userProfile = user;
      this.tokenUsuario = user.uid;
      this.usuarioLogado = true;
      localStorage.setItem('userToken', JSON.stringify(this.tokenUsuario));
      //TODO remover
      console.log('setarInformacoesUsuario user ---> '+ JSON.stringify(user));
    }else{
      console.log('user null');
    }
  }

  removerInformacoesUsuario(){
    console.log('removerInformacoesUsuario >>');

  }

  atualizarInformacoesUsuario(user:any){
    console.log('atualizarInformacoesUsuario >>');

    if(user){
      this.setarInformacoesUsuario(user);
    }else{
      console.log('user null');
      
      this.angularFireAuth.auth.onAuthStateChanged(user =>{
        this.setarInformacoesUsuario(user);
      }); 
    }
  }

  existeUsuario() {
    console.log('existeUsuario >>');
    var userId = this.userProfile.uid;
    console.log('uid current: '+ userId);

    return new Promise((resolve, reject) => {
      
      this.afDataBase.database.ref(FIREBASE_URL.PATH_USER).child(userId).once('value', function (snapshot) {
        console.log('obj: '+ snapshot.val());
        console.log('obj json: '+ JSON.stringify(snapshot.val()));
        
        var exists = (snapshot.val() != null);
        
        if (exists) {
          console.log('Usuario existente.');
          resolve(true);
        } else {
          console.log('Usuario inexistente.');
          resolve(false);
        }
        //return snapshot.val();
  
      });
    }); 
    
    
  }

  verificaExistenciaUsuario(){
    console.log('1');
    
    this.afDataBase.list(FIREBASE_URL.PATH_SELECT_VENTO)
    .snapshotChanges()
    .map(changes =>{
      console.log('2');
      //console.log(changes.map);
      
      return changes.map(c => (
        {
        key:c.payload.key,data: c.payload.val()
      }))
    })
  }

  cadastrarUsuario(usuario:Usuario){
    this.utilProvider.loaderIn('Aguarde...');
    let url = FIREBASE_URL.PATH_USER+this.userProfile.uid+'/dados_pessoais' ;
    
    console.log('url: '+ url);
    const itemRef = this.afDataBase.object(url);

    console.log('usuario instanciado: '+JSON.stringify(usuario));

    //usuario.data_cadastro = firebase.database. ServerValue.TIMESTAMP;

    itemRef.set(usuario)
    .then(result=>{
      console.log('result: ' +result);
      this.utilProvider.loaderOut();
      this.utilProvider.showToast('Tudo pronto, seja bem vindo!',3000,'middle');
    }).catch(error=>{
      console.log('erro: '+ error);
      this.utilProvider.loaderOut();
    });
  }

  getUsuario(){
    console.log('uid:' +'');
    
    this.afDataBase.object(FIREBASE_URL.PATH_USER+ 'id_unico_usuario')
    .snapshotChanges()
    .map(c => {
      return {key: c.payload.key, data: c.payload.val()}
    })
  }


}
