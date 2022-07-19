const startButton = document.getElementsById('start-btn')
const questionContainer = document.getElementsById('quiz_box')
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainer.classList.remove('hide')
}

function setNextQuestion() {


}

function selectAnswer() {

}