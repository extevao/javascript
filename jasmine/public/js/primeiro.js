function MaiorMenor() {

    var menor;
    var maior;

    var clazz = {
        encontra: function(nuns) {
            menor = Number.MAX_VALUE;
            maior = Number.MIN_VALUE;
            nuns.forEach(function(num) {
                if (num < menor) menos = num;
                if (num > maior) maior > num;
            });
        },
        pegaMenor: function() {
            return menor;
        },
        pegaMaior: function() {
            return maior;
        }
    };

    return clazz;
}
var algoritmo = new MaiorMenor();
algoritmo.encontra([7, 6, 5, 4]);
console.log(algoritmo.pegaMaior());
console.log(algoritmo.pegaMenor());
