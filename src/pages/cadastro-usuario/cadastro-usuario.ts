
import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeTabPage } from './../home-tab/home-tab';

@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html'
})
export class CadastroUsuarioPage {

  myForm: FormGroup;
  private myData: any;

  
  ionViewWillEnter() {
    this.menu.enable(false);
    console.log('menu false');  
  }

    ionViewWillLeave() {
      console.log('menu true');
      this.menu.enable(true);
    }


  constructor(private navCtrl: NavController, private builder: FormBuilder, private menu: MenuController) {
    this.myForm = builder.group({
      'nome': ['', Validators.required],
      'apelido': ['', Validators.required],
      'aniversario':[''],
      'temo_pratica':['']
      // 'subject': '',
      // 'message': ''
    })
  } 

  onSubmit(formData) {
    console.log('Form data is ', formData);
    this.myData = formData;
    
    this.navCtrl.setRoot(HomeTabPage);
  }
  
}