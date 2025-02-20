const questions = [
    {
        question: "Как объявить переменную в JavaScript?",
        answers: ["let   ", "var", "const", "None"],
        correct: 0
    },
    {
        question: "Каким методом можно вывести сообщение в консоль?",
        answers: ["console.log()   ", "print()", "write()", "alert()"],
        correct: 0
    },
    {
        question: "Как сложить два числа в JavaScript?",
        answers: ["a + b   ", "a - b", "a * b", "a / b"],
        correct: 0
    },
    {
        question: "Какой оператор используется для присваивания значения?",
        answers: ["=   ", "==", "===", "!="],
        correct: 0
    },
    {
        question: "Какой тип данных представляет строку?",
        answers: ["string   ", "number", "boolean", "object"],
        correct: 0
    },
    {
        question: "Что делает оператор ===?",
        answers: ["Сравнивает и тип, и значение   ", "Только сравнивает значения", "Используется для присваивания", "Является логическим оператором"],
        correct: 0
    },
    {
        question: "Как объявить массив в JavaScript?",
        answers: ["let arr = []   ", "let arr = new Array()", "let arr = list()"],
        correct: 0
    },
    {
        question: "Как узнать длину массива?",
        answers: ["arr.length   ", "arr.size()", "arr.count", "arr.len"],
        correct: 0
    },
    {
        question: "Как добавить элемент в конец массива?",
        answers: ["push()   ", "pop()", "shift()", "unshift()"],
        correct: 0
    },
    {
        question: "Как создать функцию в JavaScript?",
        answers: ["function myFunc() {}   ", "const myFunc = () => {}", "let myFunc = function() {}"],
        correct: 0
    },
    {
        question: "Как вызвать функцию?",
        answers: ["myFunc()   ", "call myFunc", "run(myFunc)", "execute myFunc()"],
        correct: 0
    },
    {
        question: "Как получить остаток от деления?",
        answers: ["%   ", "/", "Math.mod()", "**"],
        correct: 0
    },
    {
        question: "Как округлить число вверх?",
        answers: ["Math.ceil()   ", "Math.floor()", "Math.round()", "Math.trunc()"],
        correct: 0
    },
    {
        question: "Как округлить число вниз?",
        answers: ["Math.floor()   ", "Math.ceil()", "Math.round()", "Math.trunc()"],
        correct: 0
    },
    {
        question: "Как объединить строки?",
        answers: ["concat()   ", "+", "join()", "split()"],
        correct: 1
    },
    {
        question: "Как преобразовать строку в число?",
        answers: ["parseInt()   ", "parseFloat()", "Number()", "toNumber()"],
        correct: 0
    },
    {
        question: "Как проверить, является ли значение NaN?",
        answers: ["isNaN()   ", "Number.isNaN()", "typeof NaN", "NaN.check()"],
        correct: 0
    },
    {
        question: "Как перевести строку в верхний регистр?",
        answers: ["toUpperCase()   ", "toLowerCase()", "capitalize()", "upper()"],
        correct: 0
    },
    {
        question: "Как перевести строку в нижний регистр?",
        answers: ["toLowerCase()   ", "toUpperCase()", "lower()", "downcase()"],
        correct: 0
    },
    {
        question: "Как проверить длину массива?",
        answers: ["arr.length   ", "arr.count", "arr.size", "arr.len"],
        correct: 0
    },
    {
        question: "Как заменить подстроку в строке?",
        answers: ["replace()   ", "sub()", "change()", "edit()"],
        correct: 0
    },
    {
        question: "Как разделить строку на массив по разделителю?",
        answers: ["split()   ", "divide()", "slice()", "cut()"],
        correct: 0
    },
    {
        question: "Как получить текущую дату и время?",
        answers: ["new Date()   ", "Date.now()", "getDate()"],
        correct: 0
    },
    {
        question: "Как проверить, является ли значение массивом?",
        answers: ["Array.isArray()   ", "typeof array", "array instanceof Array"],
        correct: 0
    },
    {
        question: "Как проверить, пуст ли массив?",
        answers: ["arr.length === 0   ", "arr.isEmpty()", "arr.count === 0"],
        correct: 0
    },
    {
        question: "Как остановить выполнение цикла?",
        answers: ["break   ", "continue", "exit", "stop"],
        correct: 0
    },
    {
        question: "Как объединить массив в строку?",
        answers: ["join()   ", "merge()", "concat()", "combine()"],
        correct: 0
    },
    {
        question: "Как добавить элемент в начало массива?",
        answers: ["unshift()   ", "push()", "append()", "prepend()"],
        correct: 0
    },
    {
        question: "Как получить первый элемент массива?",
        answers: ["arr[0]   ", "arr.first()", "arr.head()", "arr.begin()"],
        correct: 0
    },
    {
        question: "Как проверить, является ли переменная массивом?",
        answers: ["Array.isArray()   ", "typeof arr === 'array'", "instanceof Array", "isArray(arr)"],
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
