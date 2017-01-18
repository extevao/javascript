class Membro {
    constructor(nome, email) {
        this._nome = nome;
        this._email = email;
        this._jogos = [];
    }

    get nome() {
        return this._nome;
    }
    get email() {
        return this._email;
    }
    get jogos() {
        return this._jogos;
    }
}
