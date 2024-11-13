 class Pessoa{
    constructor(nome, idade, cpf, dataNasc){
    this.nome = nome,
    this.idade = idade,
    this.cpf = cpf,
    this.dataNasc = dataNasc
};

    saida(){
        return `Nome: ${this.nome} <br>
                Idade: ${this.idade} <br>
                CPF: ${this.cpf} <br>
                Ano de Nascimento ${this.dataNasc}`;
}

}

export default Pessoa;