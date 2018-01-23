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
    caracteristicas: CaracteristicasRacha;
    data_acontecimento: Array<DataAcontecimento>[];
    participante: Array<Nickname>[];
    favoritos: Array<Nickname>[];
    propriedades: Propriedades;
    listaCurtidas:Array<Curtida>[];
    listaNegativas:Array<Negativa>[];
    listaAvaliacoes:Array<Avaliacao>[];
    
}