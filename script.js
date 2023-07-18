const velha = document.querySelector(".velha")

let jogador = "o"

function mudarJogador(){
    if(jogador == "x"){
        jogador = "o"
    } else {
        jogador = "x"
    }

    return jogador
}

function verificarVencedor(){
    let list = []
    let jogada = []
    let vencedor = ""
    
    for(let i=0; i<9; i++){
        list[i] = document.getElementById(`${i}`).innerText
    }


    jogada[0] = list[0] + list[1] + list[2]
    jogada[1] = list[3] + list[4] + list[5]
    jogada[2] = list[6] + list[7] + list[8]

    jogada[3] = list[0] + list[3] + list[6]
    jogada[4] = list[1] + list[4] + list[7]
    jogada[5] = list[2] + list[5] + list[8]

    jogada[6] = list[0] + list[4] + list[8]
    jogada[7] = list[2] + list[4] + list[6]
    

    for(let i=0; i<8; i++){
        if(jogada[i] == "XXX"){
            vencedor = "X"
        } else if(jogada[i] == "OOO"){
            vencedor = "O"
        }
    }

    return vencedor
}

for(let i=0; i<9; i++){
    const elemento = document.createElement("div")
    elemento.classList = "elemento"
    elemento.id = `${i}`
    velha.appendChild(elemento)

    elemento.addEventListener("click", function(e){
        e.stopPropagation

        if(elemento.innerText == "X" || elemento.innerText == "O"){
            alert("POR FAVOR TENTE OUTRA POSIÇÃO")
        } else {
            
            if(verificarVencedor() != ""){
                alert(`O JOGADOR ${verificarVencedor()} VENCEU !!!`)
            } else {
                jogador = mudarJogador();
        
                if(jogador == "x"){
                    elemento.innerText = "X"
                } else {
                    elemento.innerText = "O"
                }
            }
        }
    })
}