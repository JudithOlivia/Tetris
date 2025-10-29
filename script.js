document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    let square = Array.from(document.querySelectorAll('.grid div'))
    const scoreDisplay = document.querySelector('#score')
    const startBn = document.querySelector('#start-button')
    const width = 10
    let nextRandom = 0 
    let timerId 
    let score = 0
    const colors = [
        'orange',
        'red',
        'purple',
        'green',
        'blue'
    ]

    // tetrominos
    const ITetromino = [
        [1, width+1, width*2 + 1, 2],
        [width, width+1, width+2, width*2 + 2],
        [1, width+1, width*2 + 1, 2],
        [width, width+1, width+2, width*2 + 2]
    ]

    const zTetromino = [
        [0, width, width+1, width*2 + 1],
        [width+1, width+2, width*2, width*2 + 1],
        [0, width, width+1, width*2 + 1],
        [width+1, width+2, width*2, width*2 + 1]
    ]

    const tTetramino = [
        [1, width, width+1, width+2],
        [1, width+1, width+2,width*2 + 1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino = [
        [1, width+1, width*2 + 1, width*3 + 1],
        [width, width+1, width+2, width+3],
        [1, width+1, width*2 + 1, width*3 +1],
        [width, width+1, width+2, width+3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

    let currentPosition = 4
    let currentRotation = 0

    console.log(theTetrominoes[0][0])

    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes[random][currentRotation]

    function draw(){
        current.forEach(index => {
            squares[currentPosition + index].classList.add('tertromino')
            squares[currentPosition + index].style.backgroundColor = colors[random]
        })
    }

    function undraw() {
        current.forEach(index =>{
            squares[currentPosition + index].classList.remove('tetromino')
            squares[currentPosition + index].style.backgroundColor = ''
        })
    }

})