function soma(nota1, nota2, nota3, nota4) {
    if(typeof(nota1) == "number" && typeof(nota2) == "number" && typeof(nota3) == "number" && typeof(nota4) == "number"){
        let resultado = nota1 + nota2 + nota3 + nota4
        alert(`O resultado da Soma é: ${resultado}`)
    }else{
        alert("A função só pode receber números!") 
    }
}

let nota1 = 4
let nota2 = 6
let nota3 = 3
let nota4 = 1

let resultado = soma(nota1, nota2, nota3, nota4)
