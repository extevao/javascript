class ListaMembros {
    constructor() {
        this._membros = [];

    }

    adiciona(membro) {
        this._membros.push(membro);

    }

    get membros() {
        return [].concat(this._membros);
    }

    esvazia() {
        this._membros = [];

    }
}
