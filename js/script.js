let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;// quantidade de box do tabuleiro
let snake = [];

snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right";
let food={
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box, 
}

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

function drawFood() {
    context.fillStyle= "red";
    context.fillRect(food.x, food.y, box, box);
    
}



// criando evento para funçaõ (update) e teclado
document.addEventListener('keydown', update);

//função para direcionamento de com as teclas 
function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

//função que inicia e para o jogo
function iniciarJogo(){
   
    // condição para rolagem da cobrinha ate as bordas do tabuleiro
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0  && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0  && direction == "up") snake[0].y = 16 * box;

   
    criarBG();
    criarCobrinha();
    drawFood();
   
   
    //ponto de inicio da cobrinha
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    //movimento da cobrinha
    if(direction == "right") snakeX +=box;
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
