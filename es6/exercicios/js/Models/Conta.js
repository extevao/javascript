class Conta{
    constructor(titular, conta){

        this._titular = titular;
        this._conta = conta;
        this._saldo = 0.0;

    }

    deposita(valor){
        console.log('Valor depositado: ' + valor);
        this._saldo += valor;
    }

    get titular(){
        return this._titular;
    }

    get conta(){
        return this._conta;
    }

    get saldo(){
        return this._saldo;
    }
    

}