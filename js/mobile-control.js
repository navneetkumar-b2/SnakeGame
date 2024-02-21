document.addEventListener('DOMContentLoaded', () => {
    // const gameBoard = document.getElementById('game-board');
    // const snakeElement = document.getElementById('snake');
    // const foodElement = document.getElementById('food');
    const upButton = document.getElementById('up');
    const downButton = document.getElementById('down');
    const leftButton = document.getElementById('left');
    const rightButton = document.getElementById('right');
    const startMsg = document.getElementById('startBtn');
    // let snake = [{ x: 10, y: 10 }];
    // let food = { x: 0, y: 0 };
    // let dx = 0;
    // let dy = 0;
    // let score = 0;

    // Rest of the code remains the same...

    // Add event listeners for buttons
    upButton.addEventListener('click', () => {
        startMsg.innerText=''
            inputDir.x = 0;
            inputDir.y = -1;
        
    });

    downButton.addEventListener('click', () => {
        startMsg.innerText=''

        inputDir.x = 0;
        inputDir.y = 1;
        
    });

    leftButton.addEventListener('click', () => {
        startMsg.innerText=''

            inputDir.x = -1;
            inputDir.y = 0;
        
    });

    rightButton.addEventListener('click', () => {
        startMsg.innerText=''

        inputDir.x = 1;
            inputDir.y = 0;
        
    });


});
