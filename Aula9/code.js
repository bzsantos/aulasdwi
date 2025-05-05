/*
O formato JSON é utilizado para estruturar dados em formato de texto e permitir a troca de dados entre 
aplicações de forma simples, leve e rápida*/

//Simulando meu Banco de dados 
function dicionario(){
        
    //Array ou vetor
    
      let dados = [  //Dicionário de Dados
                    {id:1, usuario:"Paul", login:"paul", senha:"1234@"}, //0
                    {id:2, usuario:"Ringo", login:"ringo", senha:"2233"}, //1
                    {id:3, usuario:"John", login:"john", senha:"2255"}   //2
                  ]
     
      //Passar para o formato JSON
      let meujson = JSON.stringify(dados)            

      //Armazenamento de dados no navegados - adicionar
      localStorage.setItem("bancodados", meujson)
                
}

function logar(){
    let lg = document.querySelector("#login").value 
    let ps = document.querySelector("#password").value 

    //Armazenamento de dados no navegados - pegando | Retornando do JSON para o original
    let dados = JSON.parse(localStorage.getItem("bancodados"))

    //Laço de repetição Para que a variável i igua a 0 chegue na última posição, 
    // conte cada dado do vetor até encontrar o último
    for (let i=0; i < dados.length; i++){
        
        //Começar a trabalhar com Sessão
        if (lg == dados[i].login && ps == dados[i].senha){
            console.log("mesmo usuário logado! \n Qual número da posição do array: " + i)

            sessionStorage.setItem("usuario", dados[i].usuario)
          
           window.location.href = "sobre.html"
        } 
    }
}

function userlogado(){

    document.querySelector("#nome").value = sessionStorage.getItem("usuario")
}





