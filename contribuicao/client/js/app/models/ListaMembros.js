class ListaMembros {
    constructor(armadilha) {
        this._membros = [];
        this._armadilha = armadilha;
    }

    adiciona(membro) {
        this._membros.push(membro);
        this._armadilha(this);
    }

    get membros() {
        return [].concat(this._membros);
    }

    esvazia() {
        this._membros = [];
        this._armadilha(this);
    }
}
