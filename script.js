let newPara = document.createElement('p')
let scorePara = document.createElement('p')


document.querySelector('body').appendChild(newPara)
document.querySelector('body').appendChild(scorePara)
let scoreKeeper = {
  win: 0,
  loss: 0,
  draw: 0
}

let scoreJson = localStorage.getItem('score')
if (scoreJson != undefined) {
  scoreKeeper = JSON.parse(scoreJson)
} else {

}
let rock = document.querySelector('#rock')
let paper = document.querySelector('#paper')
let scissors = document.querySelector('#scissors')
let reset = document.querySelector('#reset')

scorePara.textContent = `Win: ${scoreKeeper.win}, Losses: ${scoreKeeper.loss}, Draw: ${scoreKeeper.draw}`

rock.addEventListener('click', function(e) {
  newPara.innerHTML = ''
  compNum = generateRand()

  if (compNum === 1) {
    newPara.textContent = 'You picked Rock, The Computer also picked Rock: Draw'
    scoreKeeper.draw = scoreKeeper.draw + 1

  } else if (compNum === 2) {
    newPara.textContent = 'You picked Rock, The Computer picked Paper: Loss'
    scoreKeeper.loss = scoreKeeper.loss + 1

  } else {
    newPara.textContent = 'You picked Rock, The Computer picked Scissors: Victory'
    scoreKeeper.win = scoreKeeper.win + 1

  }
  updateScore()
})

paper.addEventListener('click', function(e) {
  newPara.innerHTML = ''
  compNum = generateRand()

  if (compNum === 1) {
    newPara.textContent = 'You picked Paper, The Computer picked Rock: Victory'
    scoreKeeper.win = scoreKeeper.win + 1

  } else if (compNum === 2) {
    newPara.textContent = 'You picked Paper, The Computer also picked Paper: Draw'
    scoreKeeper.draw = scoreKeeper.draw + 1

  } else {
    newPara.textContent = 'You picked Paper, The Computer picked Scissors: Loss'
    scoreKeeper.loss = scoreKeeper.loss + 1

  }
  updateScore()
})

scissors.addEventListener('click', function(e) {
  newPara.innerHTML = ''
  compNum = generateRand()

  if (compNum === 1) {
    newPara.textContent = 'You picked Scissors, The Computer picked Rock: Loss'
    scoreKeeper.loss = scoreKeeper.loss + 1

  } else if (compNum === 2) {
    newPara.textContent = 'You picked Scissors, The Computer picked Paper: Victory'
    scoreKeeper.win = scoreKeeper.win + 1

  } else {
    newPara.textContent = 'You picked Scissors, The Computer also picked Scissors: Draw'
    scoreKeeper.draw = scoreKeeper.draw + 1

  }
  updateScore()
})

reset.addEventListener('click', function(e) {
  resetFunc(scoreKeeper)
  scorePara.textContent = `Win: ${scoreKeeper.win}, Losses: ${scoreKeeper.loss}, Draw: ${scoreKeeper.draw}`

})