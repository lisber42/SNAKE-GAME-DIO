let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;// quantidade de box do tabuleiro
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

// crndo tabuleiro da cobrinha
function criarBG() {
    context.fillStyle = "Lightgreen";// cor 
    context.fillRect(0, 0, 16 * box, 16 * box);// tamanho
}

//função para criar a cobrinha 
function criarCobrinha() {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "green";// cor para a cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box);//definendo posição da cobrinha
        
    }
}
criarBG();
criarCobrinha();