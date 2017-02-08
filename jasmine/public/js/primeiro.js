class MaiorMenor {
    constructor(maior = Number.MIN_VALUE, menor = Number.MAX_VALUE) {
        this._maior = maior;
        this._menor = menor;

    }
    get pegaMenor() {
        return this._menor;
    }
    get pegaMaior() {
        return this._maior;
    }
    encontra(nuns) {

        nuns.forEach(num => {
            if (num < this._menor) this._menor = num;
            if (num > this._maior) this._maior = num;
        });
    }
}


var algoritmo = new MaiorMenor();
console.log(algoritmo);

algoritmo.encontra([5,15,7,9,11]);
console.log(algoritmo.pegaMaior);
console.log(algoritmo.pegaMenor);
