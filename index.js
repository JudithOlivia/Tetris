document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const miniGrid = document.querySelector('.mini-grid');

    grid.innerHTML = '';
    for (let i = 0; i < 200; i++) {
        const cell = document.createElement('div');
        grid.appendChild(cell);
    }

    miniGrid.innerHTML = '';
    for (let i = 0; i < 16; i++) {
        const cell = document.createElement('div');
        miniGrid.appendChild(cell);
    } 

    let squares = Array.from(document.querySelectorAll('.grid div'));
    const displaySquares = Array.from(document.querySelectorAll('.mini-grid div'));
    const scoreDisplay = document.querySelector('#score');
    const startBtn = document.querySelector('#start-button');
    const width = 10;
    let nextRandom = 0;
    let timerId;
    let score = 0;
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
    ];

    // tetrominos
    const lTetromino = [
        [1, width+1, width*2+1, 2],
        [width, width+1, width+2, width*2+2],
        [1, width+1, width*2+1, width*2],
        [width, width*2, width*2+1, width*2+2]
    ];

    const zTetromino = [
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1],
        [0, width, width+1, width*2+1],
        [width+1, width+2, width*2, width*2+1]
    ];

    const tTetromino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2, width*2+1],
        [width, width+1, width+2, width*2+1],
        [1, width, width+1, width*2+1]
    ];

    const oTetromino = [
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1],
        [0, 1, width, width+1]
    ];

    const iTetromino = [
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2+1, width*3+1],
        [width, width+1, width+2, width+3]
    ];

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino];

    let currentPosition = 4;
    let currentRotation = 0;
    let random = Math.floor(Math.random() * theTetrominoes.length);
    let current = theTetrominoes[random][currentRotation];

    function draw() {
        current.forEach(index => {
        if (currentPosition + index < squares.length) {
            squares[currentPosition + index].classList.add('tetromino');
            squares[currentPosition + index].style.backgroundColor = colors[random];
        }
        });
    }

    function undraw() {
        current.forEach(index => {
        if (currentPosition + index < squares.length) {
            squares[currentPosition + index].classList.remove('tetromino');
            squares[currentPosition + index].style.backgroundColor = '';
        }
        });
    }

    function moveDown() {
        undraw();
        currentPosition += width;
        draw();
        freeze();
    }

})