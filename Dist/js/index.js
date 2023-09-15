"use strict";
class Geral {
    constructor() {
        this.uid = '';
    }
}
class Fila extends Geral {
    constructor() {
        super(...arguments);
        this.codigo = '';
        this.foto = '';
        this.nome = '';
        this.documento = '';
        this.endereco = '';
        this.descricao = '';
        this.observacao = '';
        this.dataCriacao = new Date();
        this.horaInicio = '';
        this.horaFim = '';
        this.senhaInicial = '';
        this.exigeDocumentoComFoto = true;
    }
    inserir() { }
    eliminar() { }
    atualizar() { }
    cancelar() { }
    procurarPorLocalizacao() { }
    procurarPorUid() { }
    procurarPorData() { }
    procurarPorDescricao() { }
    procurarPorClienteUid() { }
}
class Senha extends Geral {
    constructor() {
        super(...arguments);
        this.foto = '';
        this.clienteUid = '';
        this.nomeFantasia = '';
        this.endereco = '';
        this.dataCriacao = new Date();
        this.dataConclusao = new Date();
        this.descricao = '';
        this.filaUid = '';
        this.filaCodigo = '';
        this.notificacaoEnviada = true;
        this.statusAtendimento = 0;
    }
    inserir() { }
    cancelar() { }
    atualizar() { }
    procurarPorCliente() { }
    trocar() { }
}
class Agendamento extends Geral {
    constructor() {
        super(...arguments);
        this.senhaUid = '';
        this.nomeFantasia = '';
        this.endereco = '';
        this.pessoaUid = '';
        this.dataAgendamento = new Date();
        this.dataCancelamento = new Date();
        this.observacao = '';
    }
}
class Pessoa extends Geral {
    constructor() {
        super(...arguments);
        this.fotoUrl = '';
        this.nome = '';
        this.documento = '';
        this.telefone = '';
        this.nivelUsuario = '';
        this.dataCadastro = new Date();
    }
    inserir() { }
    eliminar() { }
    atualizar() { }
    obterUid() { }
}
class cliente extends Geral {
}
class Empresa extends Geral {
    constructor() {
        super(...arguments);
        this.razaoSocial = '';
        this.localizacao = '';
    }
}
class Troca extends Geral {
    constructor() {
        super(...arguments);
        this.clienteSolicitanteUid = '';
        this.clienteSolicitacaoNome = '';
        this.clienteTitularUid = '';
        this.clienteTitularNome = '';
        this.status = 0;
        this.dataSolicitacao = new Date();
        this.tipoOperacao = 0;
        this.dataOperacao = new Date();
    }
    inserir() { }
    eliminar() { }
    atualizar() { }
    procurarPorUid() { }
    procurarPorSOlicitanteUidOuTitularUid() { }
}
