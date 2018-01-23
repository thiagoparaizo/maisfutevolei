import { DadosPessoais } from './../../objetos/dados_pessoais';
import { Usuario } from './../../objetos/usuario';
import { UtilProvider } from './../../providers/util';

import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeTabPage } from './../home-tab/home-tab';
import { UsuarioProvider } from '../../providers/usuario';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SelectProvider } from '../../providers/select';

@Component({
  selector: 'page-cadastro-usuario',
  templateUrl: 'cadastro-usuario.html'
})
export class CadastroUsuarioPage {

  cadastroForm: FormGroup;
  private myData: any;
  

  
  selectEstadoOptions = {
    title: 'Pizza Toppings',
    subTitle: 'Select your toppings',
    mode: 'md'
  };
  
  ionViewWillEnter() {
    this.menu.enable(false);
    console.log('menu false');  

  }

    ionViewWillLeave() {
      console.log('menu true');
      this.menu.enable(true);
    }


  constructor(private navCtrl: NavController, 
    private builder: FormBuilder, 
    private menu: MenuController, 
    public usuarioProvider: UsuarioProvider, 
    private tts: TextToSpeech, 
    public utilProvider: UtilProvider,
    public selectPtovider: SelectProvider)
    
    {
      this.cadastroForm = builder.group({
      //'nome': [''],//['', Validators.required],
      'apelido': [''],//['', Validators.required],
      'estado':['',Validators.required],
      'tempo_pratica':['',Validators.required]
      // 'subject': ['',Validators.required],
      // 'message': ''
    })
  } 

  onSubmit(formData) {
    
    this.tts.speak({
      text: 'Olá... Bem vindo ao mundo do Futivôlei!', 
      locale: 'pt-BR',
      rate: 0.90
  })
  .then(() => console.log('Success'))
  .catch((reason: any) => console.log(reason));

    console.log('Form data is: ', formData);
    this.myData = formData;
    this.usuarioProvider.cadastrarUsuario(this.criarObjetousuario(formData));
    this.navCtrl.setRoot(HomeTabPage);
  }

  criarObjetousuario(data:any){
    
    let usuarioObj:Usuario = new Usuario();
    
    usuarioObj.ativo = true;
    usuarioObj.nickname = '@tparaizo';
  
    usuarioObj.dados_pessoais.uid = this.usuarioProvider.userProfile.uid;
    usuarioObj.dados_pessoais.nome = this.usuarioProvider.userProfile.displayName;
    usuarioObj.dados_pessoais.e_mail = this.usuarioProvider.userProfile.email;
    usuarioObj.dados_pessoais.apelido = data.apelido;
    usuarioObj.dados_pessoais.data_nascimento = '17/01/1986';
    usuarioObj.dados_pessoais.perfil = 'jogador';
    usuarioObj.dados_pessoais.tempo_pratica = data.tempo_pratica;
    usuarioObj.dados_pessoais.estado = data.estado;
    usuarioObj.dados_pessoais.pais = 'BR';
    
    return usuarioObj;
  }
  
}

