describe('MaiorMenor', function(){

  it('deve entender numeros em ordem nao sequencial', function(){
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([5,15,7,9]);
    expect(algoritmo.pegaMaior).toEqual(15);
    expect(algoritmo.pegaMenor).toEqual(5);
  });
  it('deve entender numeros em ordem crescente', function(){
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([5,6,7,8]);
    expect(algoritmo.pegaMaior).toEqual(8);
    expect(algoritmo.pegaMenor).toEqual(5);
  });
  it('deve entender numeros em ordem decrescente', function(){
    var algoritmo = new MaiorMenor();
    algoritmo.encontra([10,9,8,7,6]);
    expect(algoritmo.pegaMaior).toEqual(10);
    expect(algoritmo.pegaMenor).toEqual(6);
  });

  it('deve entender array com um unico valor ', function(){
    var maiorMenor = new MaiorMenor();
    maiorMenor.encontra([1]);
    expect(maiorMenor.pegaMaior).toEqual(1);
    expect(maiorMenor.pegaMenor).toEqual(1);
  });
});
