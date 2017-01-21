class MembroFormView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        return `
          <form class="form" onsubmit="cadastroMembro.adiciona(event)">
              <fieldset>
                  <legend>Membro</legend>
                  <div class="form-group">
                      <label for="nome">Nome</label>
                      <input type="text" id="nome" class="form-control" required autofocus/>
                  </div>

                  <div class="form-group">
                      <label for="email">E-mail</label>
                      <input type="email" id="email" class="form-control" required/>
                  </div>

                  <button class="btn btn-primary btn-block" type="submit">
                  Incluir
                </button>



              </fieldset>

          </form>
        `;
    }
    update(membros){
      this._elemento.innerHTML = this._template();
    }
}
