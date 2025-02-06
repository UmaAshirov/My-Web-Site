const questions = [
    {
        question: "Что выведет console.log(2 + '2')?",
        answers: ["22", "4", "NaN", "undefined", "TypeError"],
        correct: 0
    },
    {
        question: "Каким ключевым словом объявляется переменная, которую можно изменять?",
        answers: ["let", "const", "var", "function", "mutable"],
        correct: 0
    },
    {
        question: "Какой метод используется для вывода информации в консоль?",
        answers: ["console.log()", "console.write()", "console.display()", "print.console()", "log.console()"],
        correct: 0
    },
    {
        question: "Что выведет console.log(typeof null)?",
        answers: ["object", "null", "undefined", "number", "boolean"],
        correct: 0
    },
    {
        question: "Какой оператор используется для строгого сравнения (учитывая тип данных)?",
        answers: ["===", "==", "=", "!=", "!=="],
        correct: 0
    },
    {
        question: "Что выведет console.log(5 > 3 > 1)?",
        answers: ["false", "true", "1", "undefined", "NaN"],
        correct: 0
    },
    {
        question: "Какой метод массива используется для добавления элемента в конец?",
        answers: ["push()", "pop()", "shift()", "unshift()", "concat()"],
        correct: 0
    },
    {
        question: "Что делает setTimeout(function() { console.log('Hello'); }, 2000)?",
        answers: ["Выведет 'Hello' через 2 секунды", "Выведет 'Hello' сразу", "Выдаст ошибку", "Остановит выполнение скрипта на 2 секунды", "Будет выполняться бесконечно"],
        correct: 0
    },
    {
        question: "Какой тип данных у переменной let x = true?",
        answers: ["boolean", "string", "number", "object", "null"],
        correct: 0
    },
    {
        question: "Какой цикл используется для перебора свойств объекта?",
        answers: ["for...in", "for...of", "while", "do...while", "foreach"],
        correct: 0
    }
];

const quizForm = document.getElementById("quiz-form");
const submitBtn = document.getElementById("submit-btn");
const resultText = document.getElementById("result");

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

questions.forEach(q => {
    const originalAnswers = [...q.answers];
    shuffleArray(q.answers);
    q.correct = q.answers.indexOf(originalAnswers[q.correct]);
});

function loadQuiz() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question-block");

        const questionText = document.createElement("p");
        questionText.classList.add("question");
        questionText.textContent = `${index + 1}. ${q.question}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement("div");
        optionsDiv.classList.add("options");

        q.answers.forEach((answer, i) => {
            const label = document.createElement("label");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question-${index}`;
            input.value = i;
            label.appendChild(input);
            label.appendChild(document.createTextNode(answer));
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(optionsDiv);
        quizForm.appendChild(questionDiv);
    });
}

function checkAnswers() {
    let score = 0;
    const questionBlocks = document.querySelectorAll(".question-block");

    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="question-${index}"]:checked`);
        const labels = questionBlocks[index].querySelectorAll("label");

        if (selected) {
            const selectedIndex = parseInt(selected.value);
            if (selectedIndex === q.correct) {
                score++;
                labels[selectedIndex].classList.add("correct");
            } else {
                labels[selectedIndex].classList.add("incorrect");
                labels[q.correct].classList.add("correct");
            }
        }
    });

    resultText.textContent = `Ваш результат: ${score} из ${questions.length}`;
}

loadQuiz();
submitBtn.addEventListener("click", checkAnswers);
