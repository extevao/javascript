class MembrosView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
      console.log(model);
        return `
          <table class="table table-hover table-bordered">
              <thead>
                  <tr>
                      <th>NOME</th>
                      <th>E-MAIL</th>
                  </tr>
              </thead>
              <tbody>
                ${model.membros.map(membro =>
                  `
                  <tr>
                    <td> ${membro.nome} </td>
                    <td> ${membro.email} </td>
                   </tr>
                  `
                ).join('')}
              </tbody>
              <tfoot>
              </tfoot>
          </table>
      `;
    }

    update(model){
      this._elemento.innerHTML = this._template(model);
    }
}
