export const FIREBASE_URL = {

    PATH_USER: 'usuarios/', //arvore objetos
    PATH_USER_ATIVIDADES: 'usuarios/{iud}/atividades/', // aviso_presenca presenca_confirmada presenca_confirmada_foto 
    /*
    data:
    id_relacionamento:
    rodada:0
    */

    PATH_USER_DADOS_PESSOAIS: 'usuarios/{iud}/dados_pessoais/',
    /*
    apelido: "thiaguinho"
    data_nascimento: "17/01/1986"
    e-mail: "thiagoparaizo@gmail.com"
    inicio_pratica: "17/01/1986"
    nome: "Thiago Paraizo"
    perfil: "jogador"
    sobrenome:
    telefone: (85)98151-6682
    uid: shdadhasaldhjaah23799hhda
    */

    PATH_USER_DADOS_ENDERECO: 'usuarios/{iud}/endereco/', //objeto
    /*
    bairro: "Passaré"
    cidade: "Fortaleza"
    complemento: "apto 202 bl 3"
    estado: "CE"
    logradouro: "Rua Joaquim Martins 398"
    pais: "Brasil"
    */


    PATH_USER_DADOS_FAVORITOS: 'usuarios/{iud}/favoritos/', //lista
    /*
    id_relacionamento: "id_quadra_bm"
    notificacao: true
    participante: false
    tipo: "quadra"
    */

    PATH_USER_DADOS_HABILIDADES: 'usuarios/{iud}/habilidades/', //objeto
    /*
    agilidade:
    altura:
    ataque:
    defesa:
    desenvoltura_cabeca:
    desenvoltura_chilena:
    desenvoltura_coxa:
    desenvoltura_ombro:
    desenvoltura_pe_direito:
    desenvoltura_pe_esquerdo:
    desenvoltura_peito:
    desenvoltura_shark:
    federado: false
    folego:
    forca:
    impulso:
    lado_na_quadra:
    leitura_de_jogo:
    movimentacao:
    nivel:
    pe:
    */

    PATH_USER_DADOS_PROPRIEDADES: 'usuarios/{iud}/propriedades/', //objeto
    /*
    alertas: false
    data_expiracao_premium:
    mensagens: true
    notificacoes: true
    permitido_enviar_alertas: true
    permitido_enviar_mensagens: true
    premium: false
    propagandas: true
    status_ativo: true
    status_logado: true
    ultima_sincronizacao:
    ultimo_acesso:
    ultimo_login:
    */

    PATH_LISTA_ALERTAS: 'alertas/', //lista objetos
    /*
    conteudo: 
    data_inclusao: 
    data_transmissao: 
    id: 
    id_relacionamento: 
    tipo_alerta: "quadra"
    titulo:
    transmitido_sucesso: false
    */

    PATH_LISTA_AVALIACOES: 'avaliacoes/', //lista objeto
    /*
    avaliacao: 0
    data: 
    depoimento: 
    id_avaliacao: 
    id_relacionamento: 
    id_usuario: 
    tipo_avaliacao: 
    */
    
    PATH_LISTA_CURTIDAS: 'curtidas/', //lista objeto
    /*
    avaliacao: 0   ---- trocar por curtida
    data: 
    depoimento: 
    id_curtida: 
    id_relacionamento: 
    id_usuario: 
    tipo_curtida: 
    */


    PATH_LISTA_DENUNCIAS: 'denuncias/', // lista objeto
    /*
    data: 
    depoimento: 
    id_denuncia: 
    id_relacionamento: 
    id_usuario: 
    tipo_denuncia: 
    */



    PATH_LISTA_QUADRAS: 'quadras/', //arvore de estados SP, CE
    PATH_LISTA_QUADRAS_ESTADO: 'quadras/{estado}/', //arvore de estados SP, CE
    
    PATH_LISTA_RACHAS: 'rachas/', //arvore de objetos estados SP, CE
    PATH_LISTA_RACHAS_ESTADO: 'rachas/{estado}/', //arvore de estados SP, CE

    PATH_SELECT_PERFIS: 'perfils/', //objeto
    /*
    administrador: "administrador"
    anunciante: "anunciante"
    atleta: "atleta"
    contribuidor: "contribuidor"
    jogador: "jogador"
    patrocinador: "patrocinador"
    professor: "professor"
    */
    
    PATH_SELECT_QUADRAS: 'select_acesso_quadra/',
    PATH_SELECT_RACHAS: 'select_acesso_racha/',
    PATH_SELECT_AREIA: 'select_areia/',
    PATH_SELECT_NIVEL: 'select_nivel/',
    PATH_SELECT_ILUMINACAO: 'select_iluminacao/',
    PATH_SELECT_VENTO: 'select_vento/',

}