import { AuthProvider } from './../providers/auth';
import { CadastroUsuarioPage } from './../pages/cadastro-usuario/cadastro-usuario';
import { TabsPage } from './../../src (cópia)/pages/tabs/tabs';
import { styleapp } from './../environments/styleapp';

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
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any; 

    //login
    static userProfile:any = localStorage.getItem('userProfile');
    static tokenUsuario = localStorage.getItem('userToken');
    logado = true; //TODO teste 

    //thema
    menuPrincipalLogo = '';
    classeMenuPrincipal = '';
    classeItensmenuPrincipal = 'itens-menu-principal-verde';
    public styleClass: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private authProvider:AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      //TODO validar
      if('verde'=='verde'){
        this.styleClass = styleapp.style_verde;        
      }
      
      this.menuPrincipalLogo = this.styleClass.logoMenuPrincial;
      this.classeMenuPrincipal = this.styleClass.classeMenuPrincipal;
      //this.classeItensmenuPrincipal = this.styleClass.classeItensmenuPrincipal;

      //TODO mock 
      this.verificarTokenUsuario();
      //this.rootPage = CadastroUsuarioPage;

    });
  }

  verificarTokenUsuario(){

    console.log('token:' + MyApp.tokenUsuario);
    console.log('token cahce:' + localStorage.getItem('userToken'));

    if(MyApp.tokenUsuario==null && localStorage.getItem('userToken')==null){
      console.log('Usuario deslogado...');
      this.rootPage = LoginPage;
      this.logado = false;
    }else{
      this.logado = true;      
      console.log('Usuario logado...');
      if(!MyApp.userProfile){
        console.log('MyApp.user == null');
        MyApp.userProfile=JSON.parse(localStorage.getItem('userProfile'));
      }

      this.rootPage = HomeTabPage;
    }
  }

  static setUser(user: any) {
    console.log('set user ---> '+ JSON.stringify(user));
    
    this.tokenUsuario = user.uid;
    this.userProfile = JSON.stringify(user);

    //console.log('1-'+user.displayName);
    //console.log('2-'+this.user.displayName);
    

    localStorage.setItem('userProfile', JSON.stringify(this.userProfile)); 
    localStorage.setItem('userToken', JSON.stringify(this.tokenUsuario)); 
    console.log('setando token e usuário...');
    
  }

  static clearUser() {
    try {
      localStorage.removeItem('userProfile');
      console.log('removendo userProfile da sessão.')
    } catch (error) {
      console.log('erro ao remover userProfile da sessão.')
    }
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

  logout(){
    this.authProvider.sigOut();
    this.navCtrl.setRoot(LoginPage);
  }

}
