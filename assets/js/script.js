document.getElementById("start-button").addEventListener("click", startButton);

  function mainQuiz() {

    const quizData = [
      {
        question: 'Commonly used data types DO NOT include:',
        options: ['Strings', 'Booleans', 'Alerts', 'Numbers'],
        correctAnswer: 'Alerts'
      },
      {
        question: 'The condition in an if / else statement is enclosed within ____.',
        options: ['Quotes', 'Curly Brackets', 'Parantheses', 'Square Brackets'],
        correctAnswer: 'Paratheses'
      },
      {
        question: 'String values must be enclosed within ____ when being assigned to variables.',
        options: ['Parantheses', 'Quotes', 'Curly Brackets', 'Commas'],
        correctAnswer: 'Quotes'
      }
    ];

    const quizContainer = document.getElementById('quiz-container');
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');

    let currentQuestionIndex = 0;
    let score = 0;

    function displayQuestion() {
      const currentQuestion = quizData[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;

      optionsElement.innerHTML = ''; // Clear previous options

      currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.classList.add('option');
        optionButton.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(optionButton);
      });
    }

    function checkAnswer(selectedOption) {
      const currentQuestion = quizData[currentQuestionIndex];

      if (selectedOption === currentQuestion.correctAnswer) {
        score++;
      }

      currentQuestionIndex++;

      if (currentQuestionIndex < quizData.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }

    function displayResult() {
      clearInterval(timer);
      // document.getElementById("timer").innerHTML = "EXPIRED";
      resultElement.textContent = `You scored ${score} out of ${quizData.length}.`;
    }

    displayQuestion();

    let time = 60;

    const timer = setInterval(function () {

      time--;

      // Output the result in an element with id=timer
      document.getElementById("timer").innerHTML = time + "s";

      // If the count down is over, write some text 
      if (time <= 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EXPIRED";
      }
    }, 1000);

    const removeTime = () => {
      time = time - 5;
    }
  };

  function startButton() {
    // call a div and make that a button
    // alert("ahhh");
    mainQuiz();
    // make that button start the quiz
  };