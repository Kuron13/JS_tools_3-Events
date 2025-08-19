const cursor = document.querySelector(".cursor");
const mouseMove = function (e) {
  let x = e.clientX;
  let y = e.clientY;
  cursor.style.left = x + "px";
  cursor.style.top = y + "px";
};
document.addEventListener("mousemove", mouseMove);

export class Cells {
  constructor(element) {
    if(typeof element === 'string') {
      element = document.querySelector(element);
    }
    this._element = element;
    this.tenguCatched = this.tenguCatched.bind(this)
    this._element.addEventListener('click', this.tenguCatched);
  }

  tenguMove() {
    const tengu = document.querySelector('.tengu')
    do {
        randomCell = Math.floor(Math.random() * allEl.length)
      } while (randomCell == tenguIndex);
    const newTenguCell = allEl[randomCell];
    tenguIndex = randomCell;
    newTenguCell.append(tengu);
    tengu.style.display = 'block';
    return;
  }

  tenguCatched(e) {
    if (!gameOver) {
      const target = e.target;
  
      if(target.classList.contains('tengu')) {
        points += 1
        pointCounter.innerHTML = `<p class='point-info'>Очки: ${points}</p>`
        e.target.style.display = 'none';
        catched = true;
      }
    }
    return;
  }
}

const cellContainer = document.querySelector('.cell-container')
for (let i = 1; i <= 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cellContainer.append(cell);
}
const allEl = Array.from(document.querySelectorAll('.cell'))
const cells = new Cells('.cell-container')

let randomCell = 0
let tenguIndex = 0

const gameInfo = document.querySelector('.game-info')
const pointCounter = document.querySelector('.point-info')
const failCounter = document.querySelector('.fail-info')
let points = 0
let fails = 0
let catched = false
let gameOver = false

document.addEventListener('DOMContentLoaded', () => {
  randomCell = Math.floor(Math.random() * allEl.length);
  tenguIndex = randomCell;
  allEl[tenguIndex].append(document.querySelector('.tengu'));
  tenguChange();
})

function tenguChange() {
  const gameInterval = setInterval(() => {
    cells.tenguMove()
    if (!catched) {
      fails += 1;
      failCounter.innerHTML = `<p class='fail-info'>Пропущено: ${fails}</p>`
      if (fails >= 5) {
        gameInfo.innerHTML += `
          <div class='gameOver'>
            <p>_____________</p>
            <p>Игра окончена.</p>
            <p>Тенгу сбежал.</p>
          </div>
        `
        gameOver = true;
        clearInterval(gameInterval);
      }
    }
    catched = false;
  }, 1000)
}