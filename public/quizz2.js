document.addEventListener("DOMContentLoaded", function () {
    const quizForm = document.getElementById("quiz-form");
    const resultContainer = document.getElementById("result-container");
    const scoreValue = document.getElementById("score-value");
    const returnHomeButton = document.getElementById("return-home");

    quizForm.addEventListener("submit", function (e) {
        e.preventDefault();
        
        const answers = {
            q1: "Self-care is taking time for oneself to maintain and improve mental well-being",
            q2: "Practice relaxation techniques such as deep breathing and meditation",
            q3: "Access to expert guidance and support",
            q4: "It helps prevent burnout and reduces stress",
            q5: "Listen, offer empathy, and encourage them to seek professional help",
            q6: "Common signs include restlessness, excessive worry, and difficulty concentrating. It can be managed through therapy, relaxation techniques, and medication if needed"
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
        window.location.href = "animals.html"; // Adjust the URL to your home page
    });
});
