import { Quadra } from './../../objetos/quadra';
import { Observable } from 'rxjs/Observable';
import { QuadraRachaProvider } from './../../providers/quadra-racha';
import { UtilProvider } from './../../providers/util';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage extends UtilProvider{

  listaQuadras: Observable<any[]>;
  listaRachas: Observable<any[]>;

  constructor(public navCtrl: NavController, private utilCrtl: UtilProvider,
     public loadingCtrl: LoadingController, public toastCtrl: ToastController,
     private duadraRachaProvider: QuadraRachaProvider) {
    super(loadingCtrl, toastCtrl);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    this.buscarAll();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);
  }

  doPulling(refresher){
    console.log('doPulling....');
  }

  buscarAll(){
    console.log('buscarAll >>');
    this.listaQuadras = this.duadraRachaProvider.listarAllQuadras();
    this.listaRachas = this.duadraRachaProvider.listarAllRachas();
  }
  
  
  
}
