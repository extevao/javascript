class MembrosView extends View{
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
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


}
