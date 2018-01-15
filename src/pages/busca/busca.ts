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

  
  
  
  
}
