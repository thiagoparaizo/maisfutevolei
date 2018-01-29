import { FiltroBusca } from './filtros-busca';
import { UsuarioProvider } from './../../providers/usuario';
import { Racha } from './../../objetos/racha';
import { Negativa } from './../../objetos/negativa';
import { Curtida } from './../../objetos/curtida';
import { Nickname } from './../../objetos/nickname';
import { Favorito } from './../../objetos/favorito';
import { Quadra } from './../../objetos/quadra';
import { Observable } from 'rxjs/Observable';
import { QuadraRachaProvider } from './../../providers/quadra-racha';
import { UtilProvider } from './../../providers/util';
import { Component, NgModule } from '@angular/core';
import { NavController, LoadingController, ToastController, PopoverController, IonicPageModule } from 'ionic-angular';
import { AngularFireList } from 'angularfire2/database';
import { Avaliacao } from '../../objetos/avaliacao';
import { DataAcontecimento } from '../../objetos/data_acontecimento';
import { Popover } from 'ionic-angular/components/popover/popover';

@Component({
  selector: 'page-busca',
  templateUrl: 'busca.html'
})
export class BuscaPage {

  public listaQuadras: Observable<any[]>;
  public listaRachas: Observable<any[]>;
  popover: Popover = null;
  distancia: number = 0;

  constructor(public navCtrl: NavController, private utilCrtl: UtilProvider,
    public loadingCtrl: LoadingController, public toastCtrl: ToastController,
    public quadraRachaProvider: QuadraRachaProvider, private usuarioProvider: UsuarioProvider,
    public popoverCtrl: PopoverController) {
    
  }

  presentPopover(myEvent) {
    if (!this.popover) {
      console.log('create popover');
      this.popover = this.popoverCtrl.create(FiltroBusca);
    }
    this.popover.present({
      ev: myEvent
    });
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    this.buscarAll();
    try {
      console.log('filtro estado: ' + this.quadraRachaProvider.filtrosBusca.estado);
      console.log('filtros quadras: ' + this.quadraRachaProvider.filtrosBusca.quadras);
      console.log('filtros rachas: ' + this.quadraRachaProvider.filtrosBusca.rachas);
      console.log('filtros acesso: ' + this.quadraRachaProvider.filtrosBusca.acesso);
    } catch (erro) {

    }

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 3000);
  }

  doPulling(refresher) {
    console.log('doPulling....');
  }

  buscarAll() {
    console.log('buscarAll >>');

    if (this.quadraRachaProvider.filtrosBusca) {
      if (this.quadraRachaProvider.filtrosBusca.quadras) {
        this.quadraRachaProvider.listarAllQuadras(this.quadraRachaProvider.filtrosBusca.estado);
      }

      if (this.quadraRachaProvider.filtrosBusca.rachas) {
        this.quadraRachaProvider.listarAllRachas(this.quadraRachaProvider.filtrosBusca.estado);

      }
    }else{
      console.log('inicio...');
      this.quadraRachaProvider.listarAllQuadras(null);
      this.quadraRachaProvider.listarAllRachas(null);
      console.log('fim...');
    }


  }

  addQuadra() {
    let quadra: Quadra = new Quadra();

    quadra.nome = 'Quadra Sao Paul';
    quadra.apelido = 'Quadra do japa';
    quadra.acesso = "acesso publico";
    quadra.cidade = 'Fortaleza';
    quadra.estado = 'SP';
    quadra.pais = 'BR';
    quadra.publicado = true;
    quadra.status_ativa = true;
    quadra.coordenadas = '43353454:4325443534';

    quadra.endereco.logradouro = 'Praça do João 23';
    quadra.endereco.numero = 234;
    quadra.endereco.complemento = 'Em frente ao jardins japones';
    quadra.endereco.bairro = 'meireles';
    quadra.endereco.cidade = 'Fortaleza';

    quadra.propriedades.contato_resp = 'Nome Contato Responsavel';
    quadra.propriedades.criador = 'Eu mesmo';
    quadra.propriedades.data_inclusao = 1233455545;
    quadra.propriedades.descricao = 'Quadra lá na bm';
    quadra.propriedades.email_resp = 'alguem@gmail.com';
    quadra.propriedades.id_resp = 'meu_id';
    quadra.propriedades.ultima_atualizacao = '122334455';

    quadra.caracteristicas.acessibilidade = false;
    quadra.caracteristicas.acesso = 'publico';
    quadra.caracteristicas.alimentacao = true;
    quadra.caracteristicas.areia = 'pesada';
    quadra.caracteristicas.banheiro = true;
    quadra.caracteristicas.estacionamento = true;
    quadra.caracteristicas.familiar = false;
    quadra.caracteristicas.hidratacao = true;
    quadra.caracteristicas.iluminacao = 'boa';
    quadra.caracteristicas.local_para_banho = true;
    quadra.caracteristicas.possui_bola = false;
    quadra.caracteristicas.possui_marcacao = true;
    quadra.caracteristicas.possui_rede = true;
    quadra.caracteristicas.praia = true;
    quadra.caracteristicas.vento = 'fraco';

    let nick1 = new Nickname();
    nick1.nickname = '@eu';
    nick1.uid = 'uid1';


    quadra.favoritos.push(nick1);


    let curtida: Curtida = new Curtida();
    curtida.id_curtida = 'id_unico';
    curtida.curtida = 3;
    curtida.data = '21534663';
    curtida.depoimento = 'muito bacana';
    curtida.id_relacionamento = 'id_quadra'
    curtida.id_usuario = 'id_usuario';
    curtida.tipo_curtida = 'positiva';
    quadra.listaCurtidas.push(curtida);

    let avaliacao: Avaliacao = new Avaliacao;
    avaliacao.avaliacao = 5
    avaliacao.data = '32425367';
    avaliacao.depoimento = 'shhow';
    avaliacao.id_avaliacao = 'id_unico_avaliacao';
    avaliacao.id_relacionamento = 'id_relacionament';
    avaliacao.id_usuario = 'id_usuario';
    avaliacao.tipo_avaliacao = 'positiva';
    quadra.listaAvaliacoes.push(avaliacao);

    let neg: Negativa = new Negativa();
    neg.negativa = 5;
    neg.data = '32425367';
    neg.depoimento = 'shhow';
    neg.id_negativa = 'id_unico_avaliacao';
    neg.id_relacionamento = 'id_relacionament';
    neg.id_usuario = 'id_usuario';
    neg.tipo_negativa = 'positiva';
    quadra.listaNegativas.push(neg);

    //metodo de inclusao
    let key = this.quadraRachaProvider.addQuadra(quadra);
    console.log('retornou key: ' + key);


  }

  addRacha() {
    let racha: Racha = new Racha();
    racha.acesso = 'publico';
    racha.apelido = 'Racha dos Langos de Sampa';
    racha.id_quadra = '-L3p940SJEcrMANHyYCi';
    racha.id_unico = 'id_unico';
    racha.nivel = 'iniciantes';
    racha.nome = 'Racha de Sampa';
    racha.publicado = true;
    racha.status_ativa = true;

    racha.caracteristicas.acessibilidade = false;
    racha.caracteristicas.acesso = 'publico';
    racha.caracteristicas.familiar = false;
    racha.caracteristicas.hidratacao = true;
    racha.caracteristicas.iluminacao = 'ótima';
    racha.caracteristicas.local_para_banho = true;
    racha.caracteristicas.possui_bola = false;
    racha.caracteristicas.possui_marcacao = true;
    racha.caracteristicas.possui_rede = true;
    racha.caracteristicas.visitantes = true;

    racha.propriedades.contato_resp = 'Nome Contato Responsavel';
    racha.propriedades.criador = this.usuarioProvider.userProfile.displayName;
    racha.propriedades.data_inclusao = 1233455545;
    racha.propriedades.descricao = 'Rachinha bom lá na BM';
    racha.propriedades.email_resp = 'alguem@gmail.com';
    racha.propriedades.id_resp = 'meu_id';
    racha.propriedades.ultima_atualizacao = '122334455';

    let dt: DataAcontecimento = new DataAcontecimento();
    dt.ativado = true;
    dt.dia_semana = 'quarta';
    dt.duracao_minutos = 120;
    dt.horario_inicio = '18:00';

    let dt2: DataAcontecimento = new DataAcontecimento();
    dt2.ativado = true;
    dt2.dia_semana = 'sabado';
    dt2.duracao_minutos = 120;
    dt2.horario_inicio = '18:00';

    racha.data_acontecimento.push(dt);
    racha.data_acontecimento.push(dt2);

    let nick1 = new Nickname();
    nick1.nickname = '@eu';
    nick1.uid = 'uid1';
    racha.favoritos.push(nick1);

    let curtida: Curtida = new Curtida();
    curtida.id_curtida = 'id_unico';
    curtida.curtida = 3;
    curtida.data = '21534663';
    curtida.depoimento = 'muito bacana';
    curtida.id_relacionamento = 'id_quadra'
    curtida.id_usuario = 'id_usuario';
    curtida.tipo_curtida = 'positiva';
    racha.listaCurtidas.push(curtida);

    let avaliacao: Avaliacao = new Avaliacao;
    avaliacao.avaliacao = 5
    avaliacao.data = '32425367';
    avaliacao.depoimento = 'shhow';
    avaliacao.id_avaliacao = 'id_unico_avaliacao';
    avaliacao.id_relacionamento = 'id_relacionament';
    avaliacao.id_usuario = 'id_usuario';
    avaliacao.tipo_avaliacao = 'positiva';
    racha.listaAvaliacoes.push(avaliacao);

    let neg: Negativa = new Negativa();
    neg.negativa = 5;
    neg.data = '32425367';
    neg.depoimento = 'shhow';
    neg.id_negativa = 'id_unico_avaliacao';
    neg.id_relacionamento = 'id_relacionament';
    neg.id_usuario = 'id_usuario';
    neg.tipo_negativa = 'positiva';
    racha.listaNegativas.push(neg);

    //metodo de inclusao
    let key = this.quadraRachaProvider.addRacha(racha);
    console.log('retornou key: ' + key);

  }



}
