


let currentQuestion = 0;
let score = 0
let scoreElement = document.getElementById("score")
let questionElement = document.getElementById('question')
let optionElement = document.getElementById('options')

function loadQuestion(){
    const currentQuizData = quizData[currentQuestion]
    questionElement.textContent = currentQuizData.question

    optionElement.innerHTML = ' '
    currentQuizData.Options.forEach((option, index)=>{
        const li = document.createElement('li')
        li.textContent = option
        li.classList.add("option")
        li.onclick = () =>  selectOption(option)
        optionElement.appendChild(li)
    })
}

function selectOption(selectedOption){
    quizData[currentQuestion].selected = selectedOption
}


function checkAnswer(){
    const currentQuizData = quizData[currentQuestion]

    if(currentQuizData.selected === currentQuizData.correctAnswer){
        score++
    }

    currentQuestion++

    if(currentQuestion < quizData.length){
        loadQuestion()
    }else{
        finishQuiz()
    }

    function finishQuiz(){

        if(currentQuestion == quizData.length){

            scoreElement.textContent = `Your final score is: ${score} out of ${quizData.length} questions` 
        }
        // scoreElement.textContent = `Your final score is: ${score} out of ${quizData.length} questions` 
        // scoreElement.textContent = 'Your final score is:' + score + 'out of' + quizData.length + 'questions' 
    }
    finishQuiz()
}


loadQuestion()


let sentences = 'i am a programmer'
let TextLength = sentences.length
console.log(sentences.toUpperCase());
console.log(sentences.length);
console.log(TextLength);


let words = 'automation '
// let text = "We are the so-called \"Vikings\" from the north.";

// slice out a string from a position 
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);





