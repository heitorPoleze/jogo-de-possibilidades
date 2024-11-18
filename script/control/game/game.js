import Pessoa from "../../model/Pessoa.js";
import * as Probabilidade from "../game/probabilidadeDePergunta.js";
import * as Input from "../inputs.js";

const outStatus = document.getElementById("outStatus");


export function problemasDaIdade(vetor, nome) {
    const condicao = Input.mostraIndexDaPessoa(vetor, nome);
    if (condicao == 20) {
        vinteAnos(nome);
    }
    if(condicao == 25){
        vinteECincoAnos(nome);
    }
    if(condicao==30){
    }
}
function vinteAnos(nome){
    if (Probabilidade.ou0ou1(2, 0)){
        const querCigarro = confirm("Você está numa festa. Aceita um cigarro?");
    
    if(querCigarro){
        if(Probabilidade.ou0ou1(2, 1)){
    alert(`Parabéns, ${nome}! Agora você tem tabagismo 🤦‍♀️`);
    outStatus.innerHTML = Pessoa.atualizarStatus(-25, 10);
        }
        else{
            alert("Uau! Pressão baixa é irado!");
            outStatus.innerHTML = Pessoa.atualizarStatus(0, 10);
        }
}else{
        if(Probabilidade.ou0ou1(2,0)){
            alert(`Agora você não tem papos no fumódromo`);
            outStatus.innerHTML = Pessoa.atualizarStatus(0, -10);
        }else{
            outStatus.innerHTML = Pessoa.atualizarStatus(10, 0);
        };
    }
}
}

function vinteECincoAnos(nome){
    const novoConcurso = confirm("Sua mãe te mandou um zap com o link do Concurso público do Banco do Brasil! Deseja estudar?");
    if(novoConcurso){
        if(Probabilidade.ou0ou1(2,1)){
            alert("Show, agora você passou num ótimo concurso");
            outStatus.innerHTML = Pessoa.atualizarStatus(30,0);
        }else{
            alert(`Desculpa, ${nome}. Você só perdeu tempo e dinheiro 😓`);
            outStatus.innerHTML = Pessoa.atualizarStatus(-10,0);

        }
    }else{
        const querTrabalhar = confirm("Quer pelo menos trabalhar?");
        if(querTrabalhar){
            if(Probabilidade.entre0e1() < 0.33){
                alert("Agora voce e caixa de supermercado zé");
                outStatus.innerHTML = Pessoa.atualizarStatus(2, -5);
            }else if(Probabilidade.entre0e1() > 0.33 && Probabilidade.entre0e1() < 0.66){
                alert("Você é um secretário maneiro");
                outStatus.innerHTML = Pessoa.atualizarStatus(10, -3);
            }else{
                alert("Você acertou em cheio no seu negócio e agora está rico!");
                outStatus.innerHTML = Pessoa.atualizarStatus(50, 30);
            }
        }else{
            alert("Bad Ending: Agora voce tem que fazer videos de react para ganhar dinheiro.");
            outStatus.innerHTML = Pessoa.atualizarStatus(-500, -500);
        }
    }
}



