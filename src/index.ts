class Geral{
    uid:string = '';
}

class Fila extends Geral{
    codigo:string = '';
    foto:string = '';
    nome:string = '';
    documento:string = '';
    endereco:string = '';
    descricao:string = '';
    observacao:string = '';
    dataCriacao:Date = new Date();
    horaInicio:string = '';
    horaFim:string = '';
    senhaInicial:string = '';
    exigeDocumentoComFoto:boolean = true;
    localizacao:any;

    inserir():void{}
    eliminar():void{}
    atualizar():void{}
    cancelar():void{}
    procurarPorLocalizacao():void{}
    procurarPorUid():void{}
    procurarPorData():void{}
    procurarPorDescricao():void{}
    procurarPorClienteUid():void{}
}

class Senha extends Geral{
    foto:string = '';
    clienteUid:string = '';
    nomeFantasia:string = '';
    endereco:string = '';
    dataCriacao:Date = new Date();
    dataConclusao:Date = new Date();
    descricao:string = '';
    filaUid:string = '';
    filaCodigo:string = '';
    notificacaoEnviada:boolean = true;
    statusAtendimento:number = 0;

    inserir():void{}
    cancelar():void{}
    atualizar():void{}
    procurarPorCliente():void{}
    trocar():void{}
}

class Agendamento extends Geral{
    senhaUid:string = '';
    nomeFantasia:string = '';
    endereco:string = '';
    pessoaUid:string = '';
    dataAgendamento:Date = new Date();
    dataCancelamento:Date = new Date();
    observacao:string = '';
}

class Pessoa extends Geral{
    fotoUrl:string = '';
    nome:string = '';
    documento:string = '';
    telefone:string = '';
    nivelUsuario:string = '';
    dataCadastro:Date = new Date();
    
    inserir():void{}
    eliminar():void{}
    atualizar():void{}
    obterUid():void{}
}

class cliente extends Geral{}

class Empresa extends Geral{
    razaoSocial:string = '';
    localizacao:string = '';
}

class Troca extends Geral{
    clienteSolicitanteUid:string = '';
    clienteSolicitacaoNome:string = '';
    clienteTitularUid:string = '';
    clienteTitularNome:string = '';
    status:number = 0;
    dataSolicitacao:Date = new Date();
    tipoOperacao:number = 0;
    dataOperacao:Date = new Date();
    
    inserir():void{}
    eliminar():void{}
    atualizar():void{}
    procurarPorUid():void{}
    procurarPorSOlicitanteUidOuTitularUid():void{}
    
}
//Agora precisamor organizar os códigos
//Existem algumas partes que provavelmente não vamos usar

