import { UtilProvider } from './util';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { FIREBASE_URL } from '../environments/firebase-url';
import { AngularFireAuth } from 'angularfire2/auth';

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
    let userId = this.userProfile.uid;
    console.log('uid current: '+ userId);

    this.afDataBase.database.ref(FIREBASE_URL.PATH_USER).child(userId).once('value', function (snapshot) {
      var exists = (snapshot.val() !== null);
      
      if (exists) {
        console.log('Usuario existente.');
        return true;
      } else {
        console.log('Usuario inexistente.');
        return false;
      }

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

  cadastrarUsuario(data:any){
    this.utilProvider.loaderIn('Aguarde...');
    let url = FIREBASE_URL.PATH_USER+this.userProfile.uid+'/dados_pessoais' ;
    
    console.log('url: '+ url);
    const itemRef = this.afDataBase.object(url);
    
    itemRef.set({
      apelido : data.apelido,
        data_nascimento : '',
        e_mail : this.userProfile.email,
        estado: data.estado,
        tempo_pratica : data.tempo_pratica,
        nome : this.userProfile.displayName,
        perfil : 'jogador',
        telefone : '',
        uid : this.userProfile.uid

    }).then(result=>{
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
