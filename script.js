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
})