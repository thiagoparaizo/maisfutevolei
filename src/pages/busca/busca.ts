import { UtilProvider } from './../../providers/util';
import { Component } from '@angular/core';
import { NavController, LoadingController, ToastController } from 'ionic-angular';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage extends UtilProvider{

  constructor(public navCtrl: NavController, private utilCrtl: UtilProvider,
     public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    super(loadingCtrl, toastCtrl);
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);
  }

  doPulling(refresher){
    console.log('doPulling....');
  }
  
  
  
}
