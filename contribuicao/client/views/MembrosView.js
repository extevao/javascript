class MembrosView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template() {
        return `
          <table class="table table-hover table-bordered">
              <thead>
                  <tr>
                      <th>NOME</th>
                      <th>E-MAIL</th>
                  </tr>
              </thead>
              <tbody>
                  <tfoot>
                  </tfoot>
          </table>
      `;
    }

    update(){
      this._elemento.innerHTML = this._template();
    }
}
