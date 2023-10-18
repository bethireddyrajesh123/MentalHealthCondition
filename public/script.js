document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result-container");
    const scoreValue = document.getElementById("score-value");
    const returnHomeButton = document.getElementById("return-home");

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const answers = {
            q1: "Paris",
            q2: "Mars",
            q3: "Blue Whale"
        };
        let score = 0;

        for (const question in answers) {
            const selectedOption = document.querySelector(`input[name="${question}"]:checked`);
            if (selectedOption) {
                if (selectedOption.value === answers[question]) {
                    score++;
                }
            }
        }

        scoreValue.textContent = score;
        resultContainer.style.display = "block";
        quizForm.style.display = "none";
    });

    returnHomeButton.addEventListener("click", function () {
        window.location.href = "dashboard.html";
    });
});
