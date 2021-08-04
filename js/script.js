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


const quizContainer2 = document.getElementById('quiz2');
const resultsContainer2 = document.getElementById('results2');
const next = document.getElementById('next');
const prev = document.getElementById('prev');

const submitButton2 = document.getElementById('submit2');
const answerContainers = document.getElementsByClassName('answer');


let counter = 0

function mostraDomanda() {
    
    quizContainer2.innerHTML = `${myQuestions[counter].question} <br>`
    
    for (letter in myQuestions[counter].answers) {
        quizContainer2.innerHTML +=
        `
        <div class="answer">
        <label>
        <input onclick="mostraRisultato()" type="radio" name="question${[counter]}" value="${letter}">
        ${letter}: 
        ${myQuestions[counter].answers[letter]}
        </label>  
        </div>  
        `
    }
    
};

function nextquestion() {
    if(counter === myQuestions.length-1){
        counter = 0
    }
    else {
        counter++
    }
    mostraDomanda()
}

function prevquestion() {
    if(counter === 0 ){
        counter = myQuestions.length-1
    }
    else {
        counter--
    }
    mostraDomanda()
}

function mostraRisultato() {
    var userAnswer = '';
    for (var i = 0; i < answerContainers.length; i++) {
        
        // prendo la letterea corispondente alla risposta
        userAnswer = (answerContainers[i].querySelector(`input[name=question${[counter]}]:checked`) || {}).value;

        if (userAnswer === myQuestions[counter].correctAnswer) {
            answerContainers[i].style.color = 'lightgreen';
        }
        
        else {
            // answerContainers[i].style.color = 'red';
        }
    }
}

mostraDomanda()
