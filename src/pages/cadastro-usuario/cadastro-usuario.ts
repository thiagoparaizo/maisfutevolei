
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeTabPage } from './../home-tab/home-tab';

@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html'
})
export class CadastroUsuarioPage {

  myForm: FormGroup;
  private myData: any;


  constructor(private navCtrl: NavController, private builder: FormBuilder) {
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