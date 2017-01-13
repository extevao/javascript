class Pessoa{
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    obtemNomeCompleto(){
        return 'Nome completo: ' + this._nome + ' ' + this._sobrenome;
    }
}