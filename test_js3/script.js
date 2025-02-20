const questions = [
    {
        question: "Как объявить переменную, если её значение будет изменяться?",
        answers: ["let   ", "const", "var", "function", "static"],
        correct: 0
    },
    {
        question: "Как вывести сообщение в консоль?",
        answers: ["console.log()   ", "alert()", "print()", "write()"],
        correct: 0
    },
    {
        question: "Какой тип данных у числа?",
        answers: ["number   ", "string", "boolean", "object"],
        correct: 0
    },
    {
        question: "Как проверить равенство без приведения типов?",
        answers: ["===   ", "==", "=", "!=="],
        correct: 0
    },
    {
        question: "Как создать пустой массив?",
        answers: ["let arr = []   ", "let arr = new Array()"],
        correct: 0
    },
    {
        question: "Как получить длину массива?",
        answers: ["arr.length   ", "arr.count", "arr.size()"],
        correct: 0
    },
    {
        question: "Как добавить элемент в конец массива?",
        answers: ["push()   ", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "Как объявить функцию?",
        answers: ["function name() {}   ", "let name = function() {}", "const name = () => {}"],
        correct: 0
    },
    {
        question: "Как вызвать функцию?",
        answers: ["name()   ", "call name", "run(name)"],
        correct: 0
    },
    {
        question: "Как узнать тип переменной?",
        answers: ["typeof   ", "instanceof", "getType()"],
        correct: 0
    },
    {
        question: "Как создать объект?",
        answers: ["let obj = {}   ", "let obj = new Object()"],
        correct: 0
    },
    {
        question: "Как получить доступ к свойству объекта?",
        answers: ["obj.property   ", "obj[\"property\"]"],
        correct: 0
    },
    {
        question: "Как удалить свойство объекта?",
        answers: ["delete obj.property   ", "obj.property = null"],
        correct: 0
    },
    {
        question: "Как проверить, является ли переменная массивом?",
        answers: ["Array.isArray(arr)   ", "arr instanceof Array"],
        correct: 0
    },
    {
        question: "Как объединить строки?",
        answers: ["'Hello' + ' World'   ", "concat()", "join()"],
        correct: 0
    },
    {
        question: "Как создать задержку выполнения кода?",
        answers: ["setTimeout()   ", "setInterval()", "wait()"],
        correct: 0
    },
    {
        question: "Какой оператор используется для логического 'ИЛИ'?",
        answers: ["||   ", "&&", "!"],
        correct: 0
    },
    {
        question: "Какое значение возвращает confirm() при нажатии 'ОК'?",
        answers: ["true   ", "false", "null"],
        correct: 0
    },
    {
        question: "Как преобразовать строку в число?",
        answers: ["parseInt()   ", "parseFloat()", "Number()"],
        correct: 0
    },
    {
        question: "Как проверить, является ли значение NaN?",
        answers: ["isNaN()   ", "Number.isNaN()"],
        correct: 0
    },
    {
        question: "Как получить текущую дату?",
        answers: ["new Date()   ", "Date.now()"],
        correct: 0
    },
    {
        question: "Как получить случайное число от 0 до 1?",
        answers: ["Math.random()   ", "random()"],
        correct: 0
    },
    {
        question: "Как округлить число вверх?",
        answers: ["Math.ceil()   ", "Math.floor()"],
        correct: 0
    },
    {
        question: "Как округлить число вниз?",
        answers: ["Math.floor()   ", "Math.ceil()"],
        correct: 0
    },
    {
        question: "Как проверить, пуст ли массив?",
        answers: ["arr.length === 0   ", "arr.isEmpty()"],
        correct: 0
    },
    {
        question: "Как остановить выполнение цикла?",
        answers: ["break   ", "continue"]
    },
    {
        question: "Как пропустить одну итерацию цикла?",
        answers: ["continue   ", "break"]
    },
    {
        question: "Как соединить два массива?",
        answers: ["concat()   ", "join()"]
    },
    {
        question: "Как получить первый элемент массива?",
        answers: ["arr[0]   ", "arr.first()"]
    },
    {
        question: "Как удалить последний элемент массива?",
        answers: ["arr.pop()   ", "arr.removeLast()"]
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
