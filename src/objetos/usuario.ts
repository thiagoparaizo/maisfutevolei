import { Atividades } from "./atividades";
import { DadosPessoais } from "./dados_pessoais";
import { Favorito } from "./favorito";
import { Habilidades } from "./habilidades";
import { PropriedadesUsuario } from "./propriedades-usuario";
import { Publicacao } from "./publicacao";
import { PropriedadesQuadra } from "./propriedade_quadra";

export class Usuario {
    $key: string;

    ativo:boolean
    nickname :string;
    dados_pessoais: DadosPessoais;
    
    favorito: Array<Favorito>[];
    publicacoes: Array<Publicacao>[];
    atividades: Atividades;
    
    habilidades:Habilidades;
    propriedades: PropriedadesUsuario;
    
  }