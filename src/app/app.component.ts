import { AuthProvider } from './../providers/auth';
import { CadastroUsuarioPage } from './../pages/cadastro-usuario/cadastro-usuario';
import { styleapp } from './../environments/styleapp';

import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Slides } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritosPage } from '../pages/favoritos/favoritos';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { VocePage } from '../pages/voce/voce';
import { ContatoFutevoleiPage } from '../pages/contato-futevolei/contato-futevolei';
import { InformaEsDeUsoPage } from '../pages/informa-es-de-uso/informa-es-de-uso';


import { HomeTabPage } from '../pages/home-tab/home-tab';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Slides) slides: Slides;
  ionViewDidLoad() {
    console.log('ionViewDidLoad principal');
  }

  @ViewChild(Nav) navCtrl: Nav;
    
    rootPage:any; 
    //login
    //static userProfile:any = localStorage.getItem('userProfile');
    //static tokenUsuario = localStorage.getItem('userToken');
    //logado = false; //TODO teste 

    //thema
    menuPrincipalLogo = '';
    classeMenuPrincipal = '';
    classeItensmenuPrincipal = 'itens-menu-principal-verde';
    public styleClass: any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, 
    public authProvider:AuthProvider, public userProvider: UsuarioProvider) {
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

      if(!this.menuPrincipalLogo || this.menuPrincipalLogo==''){
        console.log('setando logo na mão');
        this.menuPrincipalLogo = '../assets/logo_1_verde.png';
      }

      //TODO mock 
      this.verificarTokenUsuario();
      //this.rootPage = CadastroUsuarioPage;

    });


  }

  verificarTokenUsuario(){
    console.log('verificarTokenUsuario >>');

    console.log('token:' + this.userProvider.tokenUsuario);
    console.log('token cahce:' + localStorage.getItem('userToken'));

    if(!this.userProvider.tokenUsuario && !localStorage.getItem('userToken')){
      console.log('Usuario deslogado...');
      this.rootPage = LoginPage;
      this.userProvider.usuarioLogado = false;
    }else{
      console.log('Usuario logado...');
      this.userProvider.usuarioLogado = true;

      if(!this.userProvider.userProfile){
        console.log('this.authProvider.userProfile == null');
        this.userProvider.atualizarInformacoesUsuario(null);
        //MyApp.userProfile=JSON.parse(localStorage.getItem('userProfile'));
      }
       //this.rootPage = CadastroUsuarioPage;
      this.rootPage = HomeTabPage;
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
    console.log('logout..');
    this.authProvider.signOut();
    localStorage.removeItem('userToken');
    console.log('.... loginpage');
    this.navCtrl.setRoot(LoginPage);
  }

}
