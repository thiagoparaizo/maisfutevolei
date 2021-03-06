import { Atividades } from "./atividades";
import { DadosPessoais } from "./dados_pessoais";
import { Favorito } from "./favorito";
import { Habilidades } from "./habilidades";
import { PropriedadesUsuario } from "./propriedades-usuario";
import { Publicacao } from "./publicacao";
import { Propriedades } from "./propriedades";

export class Usuario {
    $key: string;

    ativo:boolean
    nickname :string;
    data_cadastro:string;
    dados_pessoais: DadosPessoais = new DadosPessoais();
    
    favorito: Favorito[] = new Array<Favorito>();
    publicacoes: Publicacao[] = new Array<Publicacao>();
    atividades: Atividades = new Atividades();
    
    habilidades:Habilidades = new Habilidades();
    propriedades: PropriedadesUsuario = new PropriedadesUsuario();
    

    constructor(values: Object={}){
      console.log('construtor usuario...');
      console.log('construtor usuario...'+ JSON.stringify(values));
      
      Object.assign(this,values);
    } 


  }