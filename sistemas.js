// Sitema de contagem e classificação de alunos

let numeroDeAlunos =20;

for (let contador = 0; contador <= numeroDeAlunos; contador ++) {
    if (contador == 0){
        console.log("O numero atual é ZERO");
    }
    else if (contador % 2 == 0) {
        console.log("O numero" + contador + "é PAR")
    }
    else {
        console.log("O numero ${contador} é ÍMPAR")
    }
}