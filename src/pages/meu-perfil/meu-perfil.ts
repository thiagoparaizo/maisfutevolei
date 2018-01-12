import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomeTabPage } from '../home-tab/home-tab';

@Component({
  selector: 'page-meu-perfil',
  templateUrl: 'meu-perfil.html'
})
export class MeuPerfilPage {

  constructor(public navCtrl: NavController) {
  }
  
  goToHomeTab(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomeTabPage);
  }
}
