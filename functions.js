const resetFunc = function(scoreKeeper) {
  scoreKeeper.win = 0
  scoreKeeper.loss = 0
  scoreKeeper.draw = 0
  newPara.innerHTML = ''
  scorePara.innerHTML = ''

}

const generateRand = function() {
  let compNum = Math.floor(Math.random() * 3) + 1
  return compNum
}

const updateScore = function() {
  scorePara.textContent = `Win: ${scoreKeeper.win}, Losses: ${scoreKeeper.loss}, Draw: ${scoreKeeper.draw}`
  localStorage.setItem('score', JSON.stringify(scoreKeeper))

}