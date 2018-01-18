import { HomeTabPage } from './../home-tab/home-tab';
import { CadastroUsuarioPage } from './../cadastro-usuario/cadastro-usuario';

import { UserLogin } from './../../app/objetos/use-login';
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

  user:UserLogin = new UserLogin();

  constructor(public navCtrl: NavController,
    private authProvider: AuthProvider, private utilProvider: UtilProvider, private menu: MenuController) {
  }
  
  loginEmail(){
    if(true){//validar campos
      this.utilProvider.loaderIn('Logando...');
      this.authProvider.loginWithEmailPassword(this.user)
      .then((retorno:any) =>{
        console.log('usuário logado!');
        this.utilProvider.loaderOut();
        this.utilProvider.showToast('Sucesso!', 3500, '');
        MyApp.setUser(retorno);

        //this.navCtrl.setRoot();
      })
      .catch((error: any)=>{
        console.log("error: "+ error.code);
        this.utilProvider.loaderOut();
        this.utilProvider.showToast('Senha ou E-mail inválido!', 2500, '');
        
      });
    }
  }

  loginUserGoogle(){
    console.log('entrando com google');
    this.utilProvider.loaderIn('Logando...'); 
     this.authProvider.logginWithGoogle()
     .then((user:any)=>{
      console.log('2 user--> '+JSON.stringify(user)); 
      console.log('google login sucess! '+ user);
       this.utilProvider.loaderOut();
       MyApp.setUser(user);
      
       if(this.authProvider.existeUsuario()){
        this.utilProvider.showToast('Sucesso!', 3500, '');
        console.log('....111');
        this.navCtrl.setRoot(HomeTabPage);
      }else{
        this.utilProvider.showToast('Primeira vez por aqui. É necessário preencher algumas informações simples.', 3500, '');
        console.log('....122');
        this.navCtrl.setRoot(CadastroUsuarioPage);
      }

     })
     .catch((error: any)=>{
       console.log("12 error: "+ error);
     });
   }
 
   loginUserFacebook(){
     console.log('entrando com facebook');
     this.utilProvider.loaderIn('Logando...');
 
     this.authProvider.loginWithFacebookAccount()
     .then((user:any)=>{
       console.log('facebook login sucess! ');
       MyApp.setUser(user.user);
       this.utilProvider.loaderOut();
       
      console.log('....1');

      if(this.authProvider.existeUsuario()){
        this.utilProvider.showToast('Sucesso!', 3500, '');
        console.log('....11');
        this.navCtrl.setRoot(HomeTabPage);
      }else{
        this.utilProvider.showToast('Primeira vez por aqui. É necessário preencher algumas informações simples.', 3500, '');
        console.log('....12');
        this.navCtrl.setRoot(CadastroUsuarioPage);
      }

       //TODO
       //this.navCtrl.setRoot(HomePage);

     })
     .catch((error: any)=>{
       console.log("error: "+ error.code);
     });
   }
 
   goToSignup(params){
     if (!params) params = {};
     this.navCtrl.push(LoginPage);
   }


}
