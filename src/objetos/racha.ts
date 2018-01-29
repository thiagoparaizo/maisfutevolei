import { Nickname } from "./nickname";
import { Propriedades } from "./propriedades";
import { CaracteristicasRacha } from "./caracteristica_racha";
import { DataAcontecimento } from "./data_acontecimento";
import { Curtida } from "./curtida";
import { Negativa } from "./negativa";
import { Avaliacao } from "./avaliacao";

export class Racha {
    $key: string;

    publicado: true;
    status_ativa: true
    id_unico: string;
    id_quadra: string;
    nome: string;
    apelido: string;
    acesso: string;
    nivel: string;
    caracteristicas: CaracteristicasRacha = new CaracteristicasRacha();
    data_acontecimento: DataAcontecimento[] = Array<DataAcontecimento>();
    participante: Nickname[] = Array<Nickname>();
    favoritos: Nickname[] = Array<Nickname>();
    propriedades: Propriedades = new Propriedades();
    listaCurtidas:Curtida[] = Array<Curtida>();
    listaNegativas:Negativa[] = Array<Negativa>();
    listaAvaliacoes:Avaliacao[] = Array<Avaliacao>();
    
}