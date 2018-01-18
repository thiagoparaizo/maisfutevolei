import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BuscaPage } from '../busca/busca';
import { FavoritosPage } from '../favoritos/favoritos';
import { DestaquesPage } from '../destaques/destaques';

@Component({
  selector: 'page-home-tab',
  templateUrl: 'home-tab.html'
})
export class HomeTabPage {

  tab1Root: any = BuscaPage;
  tab2Root: any = FavoritosPage;
  tab3Root: any = DestaquesPage;
  constructor(public navCtrl: NavController) {
  }
  
}
