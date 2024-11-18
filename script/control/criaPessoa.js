import Pessoa from "../model/Pessoa.js";
import * as Input from "../control/inputs.js"

export default function criaPessoa(vet, nome, age, CPF, anoNasc){
    const newPessoa = new Pessoa(nome, age, Input.validarCPF(CPF), anoNasc);
        
    vet.push(newPessoa);

    outMsg.innerHTML = newPessoa.saida();
}
