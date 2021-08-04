var myQuestions = [
    {
        question: "What rival calls Bugs a 'long-eared galoot?'",
        answers: {
            a: 'Wile E. Coyote',
            b: 'Elmer Fudd',
            c: 'Yosemite Sam',
            d: 'Witch Hazel'
        },
        correctAnswer: 'c'
    },
    {
        question: "How old is Bugs Bunny?",
        answers: {
            a: '56',
            b: '37',
            c: '88',
            d: '91'

        },
        correctAnswer: 'a'
    },
    {
        question: "Who provided the first voice for Bugs Bunny?",
        answers: {
            a: 'Fritz Freleng',
            b: 'Michael Maltese',
            c: 'Mel Blanc',
            d: 'Frank Oz'

        },
        correctAnswer: 'c'
    },
    {
        question: "What was the name of the first Bugs Bunny Cartoon?",
        answers: {
            a: 'A Wild Hare',
            b: 'Bugs Bunny Gets the Boid',
            c: 'Stage Door Cartoon',
            d: 'Hare Tonic'

        },
        correctAnswer: 'a'
    },
    {
        question: "What two characters were created before Bugs Bunny?",
        answers: {
            a: 'Elmer Fudd & Yosemite Sam',
            b: 'Porky Pig & Daffy Duck',
            c: 'Sylvester & Tweety',
            d: 'Road Runner & Wile E. Coyote'

        },
        correctAnswer: 'b'
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const prevButoton = document.getElementById('prev');
const submitButton = document.getElementById('submit');
const answerContainers = document.getElementsByClassName('answer');

// Setto un contatire che incrementerò o decrementero per mostrare la domanda
let counter = 0

// Funzione per mostrare una domanda
function showQuestion() {
    
    // aggiungo al quizContainer la domanda
    quizContainer.innerHTML = `${myQuestions[counter].question} <br>`
    
    // aggiungo gli input radio per ogni scelta nelle risposte
    for (letter in myQuestions[counter].answers) {
        quizContainer.innerHTML +=
        `
        <div class="answer">
            <label>
            <input type="radio" name="question${[counter]}" value="${letter}">
             ${letter}: 
             ${myQuestions[counter].answers[letter]}
            </label>  
        </div>  
        `
    }
    
};

// domada successiva
function nextQuestion() {
    if(counter === myQuestions.length-1){
        // counter = 0
    }
    else {
        counter++
    }
    showQuestion()
}

// domada precedente
function prevQuestion() {
    if(counter === 0 ){
        // counter = myQuestions.length-1
    }
    else {
        counter--
    }
    showQuestion()
}

// in progress
function showResult() {
    var userAnswer = '';
    for (var i = 0; i < answerContainers.length; i++) {
        
        // prendo la letterea corispondente alla risposta
        userAnswer = (answerContainers[i].querySelector(`input[name=question${[counter]}]:checked`) || {}).value;

        // se la lettera userAnswer corrisponde alla domanda corrette nell'array allora la risposta diventa verde
        if (userAnswer === myQuestions[counter].correctAnswer) {
            answerContainers[i].style.color = 'lightgreen';
        }
        
        // altrimenti tutte le altre diventano rosse
        else {
            answerContainers[i].style.color = 'red';
        }
    }
}

showQuestion()
