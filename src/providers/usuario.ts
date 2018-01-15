import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  constructor(private afDataBase: AngularFireDatabase) { }

  private PATH_USER = 'usuarios/';
  private PATH_SELECT_VENTO = '/select_vento';

  verificaExistenciaUsuario(){

    console.log('1');
    
    this.afDataBase.list(this.PATH_SELECT_VENTO)
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

  getUsuario(){
    console.log('uid:' +'');
    
    this.afDataBase.object(this.PATH_USER+ 'id_unico_usuario')
    .snapshotChanges()
    .map(c => {
      return {key: c.payload.key, data: c.payload.val()}
    })
  }


}
