const quizData = [
    {
      question: "Jaki jest najwyższy szczyt w Polsce?",
      answers: {
        a: "Rysy",
        b: "Gerlach",
        c: "Kasprowy Wierch"
      },
      correct: "a",
      userAnswer: null
    },
    {
      question: "Które miasto jest stolicą Polski?",
      answers: {
        a: "Kraków",
        b: "Warszawa",
        c: "Wrocław"
      },
      correct: "b",
      userAnswer: null
    },
    {
      question: "Ile kontynentów istnieje na Ziemi?",
      answers: {
        a: "5",
        b: "6",
        c: "7"
      },
      correct: "c",
      userAnswer: null
    }
  ];
  
  let currentQuestionIndex = 0;
  
  function buildQuiz() {
    const quizContainer = document.getElementById('quiz');
    const currentQuestion = quizData[currentQuestionIndex];
    const answers = [];
  
    for (let letter in currentQuestion.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question" value="${letter}" ${currentQuestion.userAnswer === letter ? 'checked' : ''}>
          ${letter} : ${currentQuestion.answers[letter]}
        </label>`
      );
    }
  
    quizContainer.innerHTML = `
      <div class="question">${currentQuestion.question}</div>
      <div class="answers">${answers.join('')}</div>
    `;
    
    document.getElementById('prev').disabled = currentQuestionIndex === 0;
    document.getElementById('next').disabled = currentQuestionIndex === quizData.length - 1;
    document.getElementById('submit').style.display = currentQuestionIndex === quizData.length - 1 ? 'block' : 'none';
  }
  
  function showResults() {
    const resultsContainer = document.getElementById('results');
    let score = 0;
  
    quizData.forEach((question) => {
      if (question.userAnswer === question.correct) {
        score++;
      }
    });
  
    resultsContainer.innerHTML = `Twój wynik to: ${score} na ${quizData.length}.`;
  }
  
  function saveAnswer() {
    const selectedAnswer = document.querySelector('input[name="question"]:checked');
    if (selectedAnswer) {
      quizData[currentQuestionIndex].userAnswer = selectedAnswer.value;
    }
  }
  
  function showQuestion(index) {
    saveAnswer();
    currentQuestionIndex = index;
    buildQuiz();
  }
  
  document.getElementById('prev').addEventListener('click', () => showQuestion(currentQuestionIndex - 1));
  document.getElementById('next').addEventListener('click', () => showQuestion(currentQuestionIndex + 1));
  document.getElementById('submit').addEventListener('click', showResults);
  
  buildQuiz();