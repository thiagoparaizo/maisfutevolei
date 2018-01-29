import { CaracteristicasQuadra } from "./caracteristicas_quadra";
import { Endereco } from "./endereco";
import { Nickname } from "./nickname";
import { Propriedades } from "./propriedades";
import { Curtida } from "./curtida";
import { Negativa } from "./negativa";
import { Avaliacao } from "./avaliacao";

export class Quadra {
    $key: string;
    
    nome : string;
    id_unico : string;
    publicado: true;
    status_ativa: true
    acesso: string;
    apelido: string;
    pais:string;
    estado:string;
    cidade : string;
    coordenadas:string;
    endereco: Endereco = new Endereco();
    caracteristicas: CaracteristicasQuadra = new CaracteristicasQuadra();
    favoritos:Nickname[] = new Array<Nickname>();
    propriedades: Propriedades = new Propriedades();
    listaCurtidas:Curtida[] = new Array<Curtida>();
    listaNegativas:Negativa[]= Array<Negativa>();
    listaAvaliacoes:Avaliacao[]= Array<Avaliacao>();

}