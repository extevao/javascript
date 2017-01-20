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
                  <div class="">
                      <button class="btn btn-primary" type="submit">
                      Incluir
                    </button>
                      <button class="btn btn-danger" type="button">
                      Apagar
                    </button>

                  </div>
              </fieldset>

          </form>
        `;
    }
    _update(){
      this._elemento.innerHTML = this._template();
    }
}
