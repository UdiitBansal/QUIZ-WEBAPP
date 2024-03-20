document.addEventListener("DOMContentLoaded", function() {
    const quizData = [
      {
        question: "What does HTML stand for?",
        options: [
          "Hypertext Markup Language",
          "Hyper Transfer Markup Language",
          "Hypertext Machine Language",
          "Hyperlink Textual Markup Language"
        ],
        correct: 0
      },
      {
        question: "What does URL stand for?",
        options: [
          "Uniform Resource Locator",
          "Uniform React Locator",
          "Uni React Location",
          "Uni react Locus"
        ],
        correct: 0
      },
      {
        question: "Who discovered the computer?",
        options: [
          "Jerry Yang and David Filo",
          "Mark Zuckerberg",
          "Charles Babbage",
          "Ray Tomlinson"
        ],
        correct: 2
      },
      {
        question: "How much is a byte equal to?",
        options: [
          "8 bits",
          "16 bits",
          "32 bits",
          "64 bits"
        ],
        correct: 0
      }
    ];
  
    const questionEl = document.getElementById("question");
    const option_1 = document.getElementById("option_1");
    const option_2 = document.getElementById("option_2");
    const option_3 = document.getElementById("option_3");
    const option_4 = document.getElementById("option_4");
    const submitBtn = document.getElementById("submit");
    const restartBtn = document.getElementById("restart");
    const scoreDisplay = document.getElementById("score");
  
    let currentQuiz = 0;
    let score = 0;
  
    const loadQuiz = () => {
      const { question, options } = quizData[currentQuiz];
      questionEl.innerText = question;
  
      [option_1, option_2, option_3, option_4].forEach((optionEl, index) => {
        optionEl.innerText = options[index];
      });
    };
  
    const resetQuiz = () => {
      currentQuiz = 0;
      score = 0;
      scoreDisplay.innerText = score;
      clearSelectedAnswer();
      loadQuiz();
    };
  
    const clearSelectedAnswer = () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (selectedAnswer) {
        selectedAnswer.checked = false;
      }
    };
  
    loadQuiz();
  
    submitBtn.addEventListener("click", () => {
      const selectedAnswer = document.querySelector('input[name="answer"]:checked');
      if (selectedAnswer) {
        const selectedIndex = parseInt(selectedAnswer.value);
        if (selectedIndex === quizData[currentQuiz].correct) {
          score++;
          scoreDisplay.innerText = score;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
          loadQuiz();
        } else {
          alert(`Your score is ${score}/${quizData.length}`);
          resetQuiz();
        }
      } else {
        alert("Please select an answer.");
      }
    });
  
    restartBtn.addEventListener("click", () => {
      resetQuiz();
    });
  });
  