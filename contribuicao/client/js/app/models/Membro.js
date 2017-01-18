class Membro {
    constructor(nome, email, idade, jogos) {
        this.nome = nome;
        this.email = email;
        this.idade = idade;
        this.jogos = jogos;
    }

    get nome() {
        return this.nome;
    }
    get email() {
        return this.email;
    }
    get idade() {
        return this.idade;
    }
    get jogos() {
        return this.jogos;
    }
}
