
export function validarCPF(text){
    const removerCaractere = text.replace(/\D/g, '');
    if(removerCaractere.length == 11){
        return removerCaractere;
    }
    else {
        return false;
    }
}

  export function limpaCampos(...inp){
    inp.forEach(inp => {
            inp.value = "";
    })
}


export function CPFeNomeExistente(vet, inNome, inCPF){
    for(let i = 0; i < vet.length; i++){
        if(vet[i].nome == inNome.value){
        alert("Não pode registrar um nome já existente.")
        limpaCampos(inNome);
        inNome.focus();
        return true;
        }else if(vet[i].cpf == inCPF.value){
            alert("Não pode registrar um CPF já existente.");
            limpaCampos(inCPF);
            inCPF.focus();
            return true;
        }else{
            return false;
        }
    }
}

export function pessoaExiste(inNome, vetor){
    var nomeBusca = inNome.value;
    
    if(vetor.length < 1){
        alert(`Não há nenhuma pessoa no sistema`);
    }else{
        for (let i = 0; i < vetor.length; i++){
            if(vetor[i].nome.toUpperCase() == nomeBusca.toUpperCase()){
               return true; 
            }else{
                return false;
            }
        }
    }
}

export function mostraIndexDaPessoa(vetor, nome){
    for(let i  = 0; i < vetor.length; i++){
    if(vetor[i].nome == nome){
        return vetor[i].idade;
    }
}
}

export function incrementaIdade(vetPessoas, nomeBusca){
    for (let i = 0; i < vetPessoas.length; i++) {
        if (vetPessoas[i].nome === nomeBusca) {
            vetPessoas[i].idade += 1;
            return mostraIndexDaPessoa(vetPessoas, nomeBusca);}
    }
};