//variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let random = Math.round(Math.random() * 10)
let xAttempts = 1

//eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', handleResetEnter)

//funções
function handleTryClick(event) {
  event.preventDefault()
  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value < 0 || inputNumber.value > 10) {
    alert('Digite um número entre 0 e 10')
    handleTryClick()
  }

  if(Number(inputNumber.value) == random) {
    toggle()
    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas.`
  }

  inputNumber.value = ""
  xAttempts++
}

function handleResetClick() {
  toggle()
  xAttempts = 1
  random = Math.round(Math.random() * 10)
}

function handleResetEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hiden')) {
    handleResetClick()
  }
}

function toggle() {
  screen1.classList.toggle("hiden")
  screen2.classList.toggle("hiden")
}

  










