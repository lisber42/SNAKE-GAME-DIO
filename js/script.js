let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;// quantidade de box do tabuleiro
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right";

// criando tabuleiro da cobrinha
function criarBG() {
    context.fillStyle = "Lightgreen";// cor 
    context.fillRect(0, 0, 16 * box, 16 * box);// tamanho
}

//função para criar a cobrinha 
function criarCobrinha() {
    for (i=0; i < snake.length; i++) {
        context.fillStyle = "green";// cor para a cobrinha
        context.fillRect(snake[i].x, snake[i].y, box, box);//
        
    }
}

//função que inicia e para o jogo
function iniciarJogo(){
    criarBG();
    criarCobrinha();
   //ponto de inicio da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //movimento da cobrinha
    if(direction == "rigth") snakeX +=box;
    if(direction == "left") snakeX -=box;
    if(direction == "up") snakeY -=box;
    if(direction == "down") snakeY +=box;

    //função pop para tirar o ultimo elemento do array
    snake.pop();
    
    //neste metodo vamos acrecentar um elemento na frente(unshift)
    let newHead = {
        x: snakeX,
        y: snakeY,
    }
    snake.unshift(newHead);


}

let jogo = setInterval(iniciarJogo, 100); // verifica estado do jogo, se travar ele reinicia
