class NegociacaoService {
    constructor() {
        this._http = new HttpService();
    }

    obterNegociacoesDaSemana() {
        return new Promise((resolve, reject) => {

            this._http.get('negociacoes/semana')
                .then(dados => resolve(dados.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))))
                .catch(erro => reject('Não foi possível obter as negociações da semana')); //fim this.http

        }); //fim promise
    }

    obterNegociacoesDaSemanaAnterior(cb) {


        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/anterior')
                .then(dados => resolve(dados.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))))
                .catch(erro => reject('Não foi possível obter as negociações da semana anterior')); //fim this.http


        });


    }
    obterNegociacoesDaSemanaRetrasada(cb) {
        return new Promise((resolve, reject) => {
            this._http.get('negociacoes/retrasada')
                .then(dados => resolve(dados.map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor))))
                .catch(erro => reject('Não foi possível obter as negociações da semana retrasada')); //fim this.http

        });


    }
}
