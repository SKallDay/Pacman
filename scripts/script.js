const layout = [
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
  1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
  1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
  1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
  1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
  1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
  1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
]
const squares = [];
const board = document.getElementById('board');
let score = document.getElementById('score');
let scoreBoard = document.getElementById('scoreBoard');
let points = 0;
let width = 28;
let pacmanIndex = 490;
document.addEventListener('keyup', movePacman);


function init() {
  createBoard(layout);
  createPacman();
} init();

function createBoard (layout) {
  layout.forEach((i, index) => {
    const square = document.createElement('div');
    board.appendChild(square)
    squares.push(square);
    if (i === 0) {
      squares[index].classList.add('pac-dot');
    } else if (i === 1) {
      squares[index].classList.add('wall')
    } else if (i === 2) {
      squares[index].classList.add('ghost-liar');
    } else if (i === 3) {
      squares[index].classList.add('power-pellet');
    }
  });
  debugger;
  return squares;
}

function createPacman () {
  squares[pacmanIndex].classList.add('pac-man')
}

function movePacman(e) {
  squares[pacmanIndex].classList.remove('pac-man');
  switch(e.keyCode) {
    case 37:
      if (pacmanIndex % width !== 0 && !squares[pacmanIndex -1].classList.contains('wall') && !squares[pacmanIndex -1].classList.contains('ghost-lair')) {
        pacmanIndex -=1;
      }
      if (squares[pacmanIndex -1] === squares[363]) {
        pacmanIndex = 391;
      }
      break;
    case 38:
      if (pacmanIndex - width >= 0 && !squares[pacmanIndex -width].classList.contains('wall') && !squares[pacmanIndex -width].classList.contains('ghost-lair')) {
        pacmanIndex -=width;
      }
      break;
    case 39:
      if (pacmanIndex % width < width - 1 && !squares[pacmanIndex +1].classList.contains('wall') && !squares[pacmanIndex +1].classList.contains('ghost-lair')) {
        pacmanIndex +=1
      }
      if (squares[pacmanIndex +1] === squares[392]) {
        pacmanIndex = 364;
      }
      break;
    case 40:
      if (pacmanIndex + width < width * width && !squares[pacmanIndex +width].classList.contains('wall') && !squares[pacmanIndex +width].classList.contains('ghost-lair')) {
        pacmanIndex +=width;
      }
      break;
    }
  squares[pacmanIndex].classList.add('pac-man')
  eatPellet();
  checkWin();
}

function eatPellet() {
  if (squares[pacmanIndex].classList.contains('pac-dot')) {
    points++
    squares[pacmanIndex].classList.remove('pac-dot');
  }
  if (squares[pacmanIndex].classList.contains('power-pellet')) {
    ghosts.forEach(ghost => ghost.isScared = true);
    setTimeout(unScareGhost, 10000)
    squares[pacmanIndex].classList.remove('power-pellet');
    points +=10
  }
  score.innerHTML = points;
}

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className;
    this.startIndex = startIndex;
    this.speed = speed;
    this.currentIndex = startIndex;
    this.isScared = false;
    this.timer = 0;
  }
}

ghosts = [
  new Ghost('blinky', 348, 250),
  new Ghost('pinky', 376, 400),
  new Ghost('inky', 351, 300),
  new Ghost('clyde', 379, 500)
]

ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
});

ghosts.forEach(ghost => {
  moveGhost(ghost);
})

function moveGhost (ghost) {
  const directions =  [-1, +1, width, -width]
  let direction = directions[Math.floor(Math.random() * directions.length)]
  ghost.timerId = setInterval(function() {
    if (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
      !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
      //remove the ghosts classes
      squares[ghost.currentIndex].classList.remove(ghost.className)
      squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
      //move into that space
      ghost.currentIndex += direction
      squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
    } else direction = directions[Math.floor(Math.random() * directions.length)]

    if (ghost.isScared) {
      ghosts.forEach(ghost => scareGhost(ghost));
    }

    if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        consumedByPacman(ghost);
    }
    gameOver(ghost);
  }, ghost.speed);
}

function scareGhost(ghost) {
  squares[ghost.currentIndex].classList.add('scared-ghost')
}

function unScareGhost() {
  ghosts.forEach(ghost => ghost.isScared = false)
}

function consumedByPacman(ghost) {
  squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost');
  ghost.currentIndex = ghost.startIndex;
  points +=100;
  squares[ghost.currentIndex].classList.add(ghost.className ,'ghost');
}

function gameOver() {
  if (squares[pacmanIndex].classList.contains('ghost') && !squares[pacmanIndex].classList.contains('scared-ghost')) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId))
    document.removeEventListener('keyup', movePacman)
    scoreBoard.innerHTML = 'GAME OVER'
  }
}

function checkWin() {
  if (points >= 275) {
    ghosts.forEach(ghost => clearInterval(ghost.timerId));
    document.removeEventListener('keyup', movePacman);
    scoreBoard.innerHTML = 'YOU WIN';
  }
}