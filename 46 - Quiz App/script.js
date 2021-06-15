const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

let index = 0,
  answer = "",
  correct = "",
  result = 0;
const quizContainer = document.querySelector(".quiz-container");

function setQuestion(index) {
  quizContainer.innerHTML = `
  <h1>${quizData[index].question}</h1>
      <form action="#">
        <div class="questions-wrapper">        
          ${getChoices(index)}
        </div>  
      </form>
   `;

  correct = quizData[index][quizData[index].correct];
}

function getChoices(index) {
  const options = ["a", "b", "c", "d"];

  let choices = "";

  for (let i = 0; i < 4; i++) {
    choices += `
    <div class="input-container">
      <input type="radio" id="${
        quizData[index][options[i]]
      }" name="question" value="${quizData[index][options[i]]}"> 
      <label for="${quizData[index][options[i]]}">${
      quizData[index][options[i]]
    }</label>
    </div>
    `;
  }

  return choices;
}

const submit = document.querySelector(".submit");

submit.addEventListener("click", () => {
  index++;

  if (submit.value === "Reload") {
    window.location.reload();
  }

  if (index >= quizData.length) {
    SetResultTemplate();
  } else {
    setQuestion(index);

    submit.setAttribute("disabled", "true");

    checkAnswer();
  }
});

function checkAnswer() {
  const radiosButtons = Array.from(
    document.querySelectorAll('input[type="radio"]')
  );

  radiosButtons.forEach((input) => {
    input.addEventListener("change", () => {
      answer = input.value;
      if (answer === correct) {
        result++;
      }
      submit.removeAttribute("disabled");
    });
  });
}

function SetResultTemplate() {
  submit.value = "Reload";

  quizContainer.innerHTML = `
    <h1> You ansered ${result}/4 questions correctly  </h1>
  `;
}

window.onload = () => {
  setQuestion(index);
  checkAnswer();
};
