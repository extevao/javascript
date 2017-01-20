class ListaMembros {
  constructor() {
    this._membros = [];
  }

  adiciona(membro){
    this._membros.push(membro);
  }

  get membro(){
    return [].concat(this._membros);
  }
}
