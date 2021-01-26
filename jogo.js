
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() { 
    var altura = window.innerHeight
    var largura = window.innerWidth

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() { 

var posicaoX = Math.floor(Math.random() * largura)
var posicaoY = Math.floor(Math.random() * altura)

console.log(posicaoX, posicaoY)

// criar o elemento html
var mosquito =  document.createElement('img')
mosquito.src = './img/mosquito.png'
mosquito.className = 'mosquito1'
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'

document.body.appendChild(mosquito)

}