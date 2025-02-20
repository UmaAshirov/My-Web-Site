const questions = [
    {
        question: "Что выведет console.log(2 + '2')?",
        answers: ["22   ", "4", "NaN", "undefined", "TypeError"],
        correct: 0
    },
    {
        question: "Каким ключевым словом объявляется переменная, которую можно изменять?",
        answers: ["let   ", "const", "var", "function", "mutable"],
        correct: 0
    },
    {
        question: "Какой метод используется для вывода информации в консоль?",
        answers: ["console.log()   ", "console.write()", "console.display()", "print.console()", "log.console()"],
        correct: 0
    },
    {
        question: "Что выведет console.log(typeof null)?",
        answers: ["object   ", "null", "undefined", "number", "boolean"],
        correct: 0
    },
    {
        question: "Какой оператор используется для строгого сравнения (учитывая тип данных)?",
        answers: ["===   ", "==", "=", "!=", "!=="],
        correct: 0
    },
    {
        question: "Как создать массив?",
        answers: ["let arr = []   ", "let arr = new Array()", "let arr = {}", "let arr = list()"],
        correct: 0
    },
    {
        question: "Как объединить два массива?",
        answers: ["concat()  ", "merge()", "join()", "append()"],
        correct: 0
    },
    {
        question: "Как получить случайное число от 0 до 1?",
        answers: ["Math.random()   ", "random()", "generateRandom()", "rand()"],
        correct: 0
    },
    {
        question: "Как округлить число вверх?",
        answers: ["Math.ceil()   ", "Math.floor()", "Math.round()", "Math.trunc()"],
        correct: 0
    },
    {
        question: "Как проверить, содержит ли массив элемент?",
        answers: ["arr.includes(elem)   ", "arr.has(elem)", "arr.contains(elem)", "arr.exists(elem)"],
        correct: 0
    },
    {
        question: "Как получить текущую дату?",
        answers: ["new Date()   ", "Date.now()", "getDate()", "currentDate()"],
        correct: 0
    },
    {
        question: "Как создать копию массива?",
        answers: ["slice()   ", "copy()", "duplicate()", "clone()"],
        correct: 0
    },
    {
        question: "Как удалить последний элемент массива?",
        answers: ["arr.pop()   ", "arr.removeLast()", "arr.deleteLast()", "arr.splice(-1)"],
        correct: 0
    },
    {
        question: "Как остановить выполнение цикла?",
        answers: ["break   ", "continue", "exit", "stop"],
        correct: 0
    },
    {
        question: "Как проверить, пуст ли массив?",
        answers: ["arr.length === 0   ", "arr.isEmpty()", "arr.count === 0", "arr == []"],
        correct: 0
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
