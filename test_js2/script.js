const questions = [
    {
        question: "Как объявить переменную в JavaScript?",
        answers: ["let", "var", "const", "Все варианты верны", "None"],
        correct: 3
    },
    {
        question: "Каким методом можно вывести сообщение в консоль?",
        answers: ["console.log()", "print()", "write()", "alert()", "log.console()"],
        correct: 0
    },
    {
        question: "Как сложить два числа в JavaScript?",
        answers: ["a + b", "a - b", "a * b", "a / b", "concat(a, b)"],
        correct: 0
    },
    {
        question: "Какой оператор используется для присваивания значения?",
        answers: ["=", "==", "===", "!=", "+="],
        correct: 0
    },
    {
        question: "Какой тип данных представляет строку?",
        answers: ["string", "number", "boolean", "object", "array"],
        correct: 0
    },
    {
        question: "Что делает оператор ===?",
        answers: ["Сравнивает и тип, и значение", "Только сравнивает значения", "Используется для присваивания", "Является логическим оператором", "Ничего"],
        correct: 0
    },
    {
        question: "Как объявить массив в JavaScript?",
        answers: ["let arr = [];", "let arr = {};", "let arr = new Array();", "Первый и третий варианты", "Все варианты верны"],
        correct: 3
    },
    {
        question: "Как узнать длину массива?",
        answers: ["arr.length", "arr.size()", "arr.count", "arr.length()", "arr.len"],
        correct: 0
    },
    {
        question: "Как добавить элемент в конец массива?",
        answers: ["push()", "pop()", "shift()", "unshift()", "concat()"],
        correct: 0
    },
    {
        question: "Как создать функцию в JavaScript?",
        answers: ["function myFunc() {}", "const myFunc = () => {}", "let myFunc = function() {}", "Все варианты верны", "Нет правильного варианта"],
        correct: 3
    },
    {
        question: "Как вызвать функцию?",
        answers: ["myFunc()", "call myFunc", "run(myFunc)", "execute myFunc()", "None"],
        correct: 0
    },
    {
        question: "Как получить остаток от деления?",
        answers: ["%", "/", "//", "Math.mod()", "**"],
        correct: 0
    },
    {
        question: "Как округлить число вверх?",
        answers: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.trunc()", "toFixed()"],
        correct: 0
    },
    {
        question: "Как округлить число вниз?",
        answers: ["Math.floor()", "Math.ceil()", "Math.round()", "Math.trunc()", "parseInt()"],
        correct: 0
    },
    {
        question: "Как объединить строки?",
        answers: ["concat()", "+", "join()", "split()", "replace()"],
        correct: 1
    },
    {
        question: "Как проверить, содержит ли строка подстроку?",
        answers: ["includes()", "contains()", "has()", "match()", "search()"],
        correct: 0
    },
    {
        question: "Как сделать задержку выполнения кода?",
        answers: ["setTimeout()", "setInterval()", "wait()", "pause()", "sleep()"],
        correct: 0
    },
    {
        question: "Как повторять код каждые 2 секунды?",
        answers: ["setInterval()", "setTimeout()", "loop()", "repeat()", "wait()"],
        correct: 0
    },
    {
        question: "Какой оператор используется для логического 'И'?",
        answers: ["&&", "||", "!", "&", "??"],
        correct: 0
    },
    {
        question: "Как проверить тип переменной?",
        answers: ["typeof", "instanceof", "isType()", "checkType()", "getType()"],
        correct: 0
    },
    {
        question: "Как преобразовать строку в число?",
        answers: ["parseInt()", "parseFloat()", "Number()", "Все варианты верны", "toString()"],
        correct: 3
    },
    {
        question: "Как проверить, является ли значение NaN?",
        answers: ["isNaN()", "typeof NaN", "NaN.check()", "Number.isNaN()", "Оба первый и четвертый"],
        correct: 4
    },
    {
        question: "Как создать объект?",
        answers: ["let obj = {}", "let obj = []", "let obj = new Object()", "Первый и третий", "Все варианты"],
        correct: 3
    },
    {
        question: "Как удалить свойство объекта?",
        answers: ["delete obj.property", "remove obj.property", "obj.property = null", "unset obj.property", "obj.property.delete()"],
        correct: 0
    },
    {
        question: "Как получить текущую дату и время?",
        answers: ["new Date()", "Date.now()", "getDate()", "currentDate()", "today()"],
        correct: 0
    },
    {
        question: "Как проверить, является ли значение массивом?",
        answers: ["Array.isArray()", "typeof array", "array instanceof Array", "Оба первый и третий", "Все варианты"],
        correct: 3
    },
    {
        question: "Как проверить, пуст ли массив?",
        answers: ["arr.length === 0", "arr.isEmpty()", "arr.count === 0", "arr === []", "arr == null"],
        correct: 0
    },
    {
        question: "Как остановить выполнение цикла?",
        answers: ["break", "continue", "exit", "stop", "return"],
        correct: 0
    },
    {
        question: "Как пропустить одну итерацию цикла?",
        answers: ["continue", "break", "skip", "pass", "next"],
        correct: 0
    },
    {
        question: "Как сделать копию массива?",
        answers: ["slice()", "copy()", "duplicate()", "clone()", "new Array()"],
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
