import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { BuscaPage } from '../pages/busca/busca';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { DestaquesPage } from '../pages/destaques/destaques';
import { HomeTabPage } from '../pages/home-tab/home-tab';
import { MeuPerfilPage } from '../pages/meu-perfil/meu-perfil';
import { VocePage } from '../pages/voce/voce';
import { ContatoFutevoleiPage } from '../pages/contato-futevolei/contato-futevolei';
import { InformaEsDeUsoPage } from '../pages/informa-es-de-uso/informa-es-de-uso';
import { LoginPage } from '../pages/login/login';
import { CadastroUsuarioPage } from '../pages/cadastro-usuario/cadastro-usuario';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BuscaPage,
    FavoritosPage,
    DestaquesPage,
    HomeTabPage,
    MeuPerfilPage,
    VocePage,
    ContatoFutevoleiPage,
    InformaEsDeUsoPage,
    LoginPage,
    CadastroUsuarioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuscaPage,
    FavoritosPage,
    DestaquesPage,
    HomeTabPage,
    MeuPerfilPage,
    VocePage,
    ContatoFutevoleiPage,
    InformaEsDeUsoPage,
    LoginPage,
    CadastroUsuarioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}