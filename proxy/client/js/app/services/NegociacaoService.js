class NegociacaoService {

    obterNegociacoesDaSemana() {

        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'negociacoes/semana');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let negociacoes = JSON.parse(xhr.responseText)
                            .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));
                        resolve(negociacoes);
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana');
                    }
                }
            }

            xhr.send();
        });


    }

    obterNegociacoesDaSemanaAnterior(cb) {


        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/anterior');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let negociacoes = JSON.parse(xhr.responseText)
                            .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));
                        resolve(negociacoes);
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana anterior');
                    }
                }
            }

            xhr.send();

        });


    }
    obterNegociacoesDaSemanaRetrasada(cb) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();

            xhr.open('GET', 'negociacoes/retrasada');
            xhr.onreadystatechange = () => {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        let negociacoes = JSON.parse(xhr.responseText)
                            .map(dado => new Negociacao(new Date(dado.data), dado.quantidade, dado.valor));
                        resolve(negociacoes);
                    } else {
                        console.log(xhr.responseText);
                        reject('Não foi possível obter as negociações da semana retrasa.');
                    }
                }
            }

            xhr.send();
        });


    }
}
