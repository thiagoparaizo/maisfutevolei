import { environment } from './../environments/environment';
import { SelectProvider } from './../providers/select';
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

//Provider
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UtilProvider } from '../providers/util';
import { AuthProvider } from '../providers/auth';
import { ConfiguracaoProvider } from '../providers/configuracao';
import { QuadraRachaProvider } from '../providers/quadra-racha';

//Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
//Storage
import { IonicStorageModule } from '@ionic/storage';
import { UsuarioProvider } from '../providers/usuario';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Facebook } from '@ionic-native/facebook'
import { GooglePlus } from '@ionic-native/google-plus'

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
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    IonicStorageModule.forRoot()
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
    UtilProvider,
    AuthProvider,
    ConfiguracaoProvider,
    QuadraRachaProvider,
    UsuarioProvider,
    SelectProvider,
    GooglePlus,
    Facebook,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}