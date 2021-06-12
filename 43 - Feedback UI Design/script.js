const surveyContainer = document.querySelector(".survey-wrapper");
const sendButton = document.querySelector("button.send");
const optionsSurvey = document.querySelectorAll(".survey-options > div");

let optionChoiced = "";

optionsSurvey.forEach((option) =>
  option.addEventListener("click", () => {
    optionsSurvey.forEach((optionList) =>
      optionList.classList.remove("active")
    );
    option.classList.add("active");
    optionChoiced = option.textContent;
  })
);

sendButton.addEventListener("click", setFeedbackTemplate);

// function getAnswerFeedback() {
//   fetch("http://localhost:5500/43%20-%20Feedback%20UI%20Design/feedback.html")
//     .then((data) => data.text())
//     .then((html) => setFeedbackTemplate(html));
// }

function setFeedbackTemplate() {
  surveyContainer.innerHTML = `
  <div class="feedback">
    <img src="https://image.flaticon.com/icons/png/512/833/833472.png" alt="" />
    <span>Thank You !</span>
    <span class="feedback-answer">Feedback : <strong> ${optionChoiced}</strong> </span>

    <p>We'll use your feedback to improve our custumer support.</p>
  </div>`;
}
