//npm init: iniciar projeto com o node
//as especificações do projeto vão para o package.json
//criar o index.js
//instalar o express (cria o servidor dentro da máquina e dá auxílio na rota das apis)
//instalar o nodemon para reiniciar o servidor sempre que o código for atualizado


const express = require('express') //importação do express
const server = express()
server.use(express.json())

const port = 333;

const parImpar = (n) =>{
    if (n%2==0) return 'o número é par'
    return 'o número é impar'
}

const Primo = (n)=>{
    if(n<2) return false
    for(i=2;i<n;i++){
        if(n % i == 0) return false
    }
return true}

server.get('/:value',(req, res) =>{ //requisição e resposta
    let randomNumber = req.params.value
    if (randomNumber == 'insiraUmNumero') res.send (`digite 'insiraUmNumero'`)
    let resultPrimo 
    if(Primo(randomNumber) == true)resultado = 'número primo'
    if(Primo(randomNumber) == false)resultado = 'número não é primo'
    res.send(`${randomNumber} ||\n ${resultado}\n || é ${parImpar(randomNumber)}`);
    console.log('sucess')
});   

server.listen(port, ()=>{console.log(`Running at 'localhost:${port}/insiraNumero'`)})

