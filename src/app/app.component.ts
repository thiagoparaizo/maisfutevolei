import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritosPage } from '../pages/favoritos/favoritos';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { VocePage } from '../pages/voce/voce';
import { ContatoFutevoleiPage } from '../pages/contato-futevolei/contato-futevolei';
import { InformaEsDeUsoPage } from '../pages/informa-es-de-uso/informa-es-de-uso';


import { HomeTabPage } from '../pages/home-tab/home-tab';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomeTabPage ; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHomeTab(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomeTabPage);
  }
  goToFavoritos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FavoritosPage);
  }goToMeuPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MeuPerfilPage);
  }goToVoce(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VocePage);
  }goToContatoFutevolei(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContatoFutevoleiPage);
  }goToInformaEsDeUso(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InformaEsDeUsoPage);
  }
}
