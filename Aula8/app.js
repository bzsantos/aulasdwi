//Laços de reptição e condicional com 'if'

function para(){
//Para - for

let idade = document.querySelector("#idade").value 

for(let i=0;i<20;i++){

    if(i <= idade){
        console.log("Criança " + i)
        break
    }  else {
        console.log("Não decidiu: " + i)
    } 
}
}

//Enquanto - while
function enquanto(){

    let idade = document.querySelector("#idade").value 
    let i = 0

    while(i<20){

        if(i == idade){
            console.log("Está dentro da faixa de adolescente")
            break
        }
        i++
    }
}

//Faça ..enquanto
function facaenquanto(){

    let idade = document.querySelector("#idade").value 
    let i = 0

    do {
        if(i == idade){
            console.log("Está dentro da faixa de adolescente")
            break
        } else {
            console.log("Fora da faixa")
        }
        i++

    } while(i<20);
}

//Precida/ Switch case
function switchcase(){
    let idade = parseInt(document.querySelector("#idade").value) //conversão/promoção de string para inteiro

    switch(idade){
        case 0: console.log("Menos de 1 ano")
        break
        case 1: console.log("Criancinha")
        break
        case 2: console.log("Igual a 2")
        break
        default:
             console.log("Fora da faixa")
    }
}