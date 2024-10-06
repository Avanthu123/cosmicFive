const quizData = [
    {
        question:"1. What is the primary mission of the James Webb Space Telescope?",
        a: "To observe black holes",
        b: "To study the atmospheres of exoplanets",
        c: "To observe the formation of stars and galaxies",
        d: "To monitor the Earth's atmosphere",
        correct: "c"
    },
    {
        question: "2. What type of light does the James Webb Space Telescope primarily observe?",
        a: "Ultraviolet",
        b: "Infrared",
        c: "X-ray",
        d: "Visible light",
        correct: "b",
    },
    {
        question: "3. Where is the James Webb Space Telescope located in space?",
        a: "Earth's orbit",
        b: "Mars orbit",
        c: "Lagrange Point 2 (L2)",
        d: "Near the Moon",
        correct: "c",
    },
    {
        question: "4. How large is the James Webb Space Telescope’s primary mirror?",
        a: "2.4 meters",
        b: "6.5 meters",
        c: "10 meters",
        d: "12 meters",
        correct: "b",
    },
    {
        question: "5. What material is the JWST's mirror coated with to enhance reflection?",
        a: "Aluminum",
        b: "Platinum",
        c: "Gold",
        d: "Silver",
        correct: "c",
    },
    {
        question: "6.The JWST’s sunshield is designed to protect it from:",
        a: " Cosmic rays",
        b: "Light and heat from the Sun, Earth, and Moon",
        c: "Asteroids",
        d: "Gravitational waves",
        correct: "b",

    },
    {
        question: "7. Which space agency leads the James Webb Space Telescope project?",
        a: " European Space Agency (ESA)",
        b: "NASA",
        c: "Russian Space Agency (Roscosmos)",
        d: " Indian Space Research Organization (ISRO)",
        correct: "b",
    },
    {
        question: "8. What is the expected operational lifetime of the JWST?",
        a: "2 years",
        b: "5 years",
        c: "10 years",
        d: "20 years",
        correct: "c",

    },
    {
        question: "9. Which of these telescopes did the James Webb Space Telescope primarily succeed?",
        a: "Kepler Space Telescope",
        b: "Spitzer Space Telescope",
        c: "Hubble Space Telescope",
        d: "Chandra X-ray Observatory",
        correct: "c",

    },
    {
        question: "10.Which of these discoveries is JWST expected to contribute to?",
        a: "Detecting gravitational waves",
        b: "Understanding dark energy",
        c: "Studying the first galaxies formed after the Big Bang",
        d: " Finding water on Mars",
        correct: "c",

    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})