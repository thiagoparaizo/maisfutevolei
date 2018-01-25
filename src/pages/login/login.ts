import { UsuarioProvider } from './../../providers/usuario';
import { HomeTabPage } from './../home-tab/home-tab';
import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';

import { UserLogin } from './../../objetos/use-login';
import { UtilProvider } from './../../providers/util';
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth';
import { MyApp } from '../../app/app.component';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  ionViewWillEnter() {
    this.menu.enable(false);
    console.log('menu false');
  }

  user: UserLogin = new UserLogin();

  constructor(public navCtrl: NavController,
    private authProvider: AuthProvider, private utilProvider: UtilProvider, private menu: MenuController,
    private usuarioProvider: UsuarioProvider
  ) {
  }

  loginEmail() {
    if (true) {//validar campos
      this.utilProvider.loaderIn('Logando...');
      this.authProvider.loginWithEmailPassword(this.user)
        .then((retorno: any) => {
          console.log('usuário logado!');
          this.utilProvider.loaderOut();
          this.utilProvider.showToast('Sucesso!', 3500, '');
         
        })
        .catch((error: any) => {
          console.log("error: " + error.code);
          this.utilProvider.loaderOut();
          this.utilProvider.showToast('Senha ou E-mail inválido!', 2500, '');

        });
    }
  }

  loginUserGoogle() {
    console.log('entrando com google');
    this.utilProvider.loaderIn('Logando...');
    this.authProvider.logginWithGoogle()
      .then((user: any) => {

        if (user) {
          console.log('google login sucess! ');

          this.usuarioProvider.setarInformacoesUsuario(user);
          this.utilProvider.loaderOut();

          this.usuarioProvider.existeUsuario().
          then(result =>{
            console.log('result: ' +result);
            
            if (result) {
              this.utilProvider.showToast('Sucesso!', 3500, 'middle');
              this.menu.enable(true);
              this.navCtrl.setRoot(HomeTabPage);
  
            } else {
              this.utilProvider.showToast('Primeira vez por aqui. É necessário preencher algumas informações simples.', 3500, '');
              this.navCtrl.setRoot(CadastroUsuarioPage);
  
            }
          })
          .catch(error =>{
            console.log('erro na verificacao de usuario.');
          });

        }else{
          this.utilProvider.loaderOut();
        }

      })
      .catch((error: any) => {
        console.log("12 error: " + error);
        this.utilProvider.loaderOut();
        if(error == 'Error: The popup has been closed by the user before finalizing the operation.'){
          this.utilProvider.showToastError('A janela de autenticação foi fechada. Tente novamente.',4000,'middle');
        }
      });
  }

  loginUserFacebook() {
    console.log('entrando com facebook');
    this.utilProvider.loaderIn('Logando...');

    this.authProvider.facebookLogin().then()
      .then((user: any) => {

        if (user) {
          console.log('facebook login sucess! ');

          this.usuarioProvider.setarInformacoesUsuario(user);
          this.utilProvider.loaderOut();

          this.usuarioProvider.existeUsuario().
          then(result =>{
            if (result) {
              this.utilProvider.showToast('Sucesso!', 3500, 'middle');
              this.menu.enable(true);
              this.navCtrl.setRoot(HomeTabPage);
  
            } else {
              this.utilProvider.showToast('Primeira vez por aqui. É necessário preencher algumas informações simples.', 3500, '');
              this.navCtrl.setRoot(CadastroUsuarioPage);
  
            }
          })
          .catch(error =>{
            console.log('erro na verificacao de usuario.');
          });

        }else{
          this.utilProvider.loaderOut();
        }


      })
      .catch((error: any) => {
        console.log("12 error: " + error);
        this.utilProvider.loaderOut();
        if(error == 'Error: The popup has been closed by the user before finalizing the operation.'){
          this.utilProvider.showToastError('A janela de autenticação foi fechada. Tente novamente.',4000,'middle');
        }
      });


  }

  loginUserFacebookWeb() {
    console.log('entrando com facebook web');
    this.utilProvider.loaderIn('Logando...');

    this.authProvider.loginWithFacebookAccountWeb()
      .then((user: any) => {
        console.log('facebook web login sucess! ');

        if (user) {
          this.usuarioProvider.setarInformacoesUsuario(user);
          this.utilProvider.loaderOut();

          if (this.usuarioProvider.existeUsuario()) {
            this.utilProvider.showToast('Sucesso!', 3500, '');
            this.navCtrl.setRoot(HomeTabPage);

          } else {
            this.utilProvider.showToast('Primeira vez por aqui. É necessário preencher algumas informações simples.', 3500, '');
            this.navCtrl.setRoot(CadastroUsuarioPage);

          }

        }else{
          this.utilProvider.loaderOut();
        }

      })
      .catch((error: any) => {
        console.log("error: " + error.code);
      });
  }

  goToSignup(params) {
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }


}
