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
    },
    {
        question: "Какой синтаксис используется для создания цикла while?",
        answers: ["while (условие) { тело цикла }", "for (условие) { тело цикла }", "do { тело цикла } while (условие);", "while { тело цикла } (условие);", "if (условие) { тело цикла }"],
        correct: 0
    },
    {
        question: "Какой цикл удобнее использовать, если известно точное количество итераций?",
        answers: ["for", "while", "do...while", "foreach", "for...in"],
        correct: 0
    },
    {
        question: "Как объявить функцию в JavaScript?",
        answers: ["function myFunction() { }", "const myFunction = () => { }", "let myFunction = function() { }", "Все варианты верны", "function = myFunction() { }"],
        correct: 3
    },
    {
        question: "Как передавать параметры в функцию?",
        answers: ["В круглых скобках после имени функции", "В фигурных скобках", "Через запятую после вызова функции", "Используя оператор return", "Параметры передаются автоматически"],
        correct: 0
    },
    {
        question: "Как вернуть значение из функции?",
        answers: ["С помощью return", "С помощью console.log", "С помощью alert", "С помощью throw", "Функции не могут возвращать значения"],
        correct: 0
    },
    {
        question: "Какой символ используется для объявления стрелочной функции?",
        answers: ["=>", "->", "<-", "=", "**"],
        correct: 0
    },
    {
        question: "Как создать объект в JavaScript?",
        answers: ["let obj = {};", "let obj = [];", "let obj = new Object();", "Оба верны", "Ни один не верен"],
        correct: 3
    },
    {
        question: "Как получить доступ к свойству объекта?",
        answers: ["obj.property", "obj[\"property\"]", "obj->property", "Оба верны", "Только первый вариант"],
        correct: 3
    },
    {
        question: "Как добавить метод в объект?",
        answers: ["obj.method = function() {}", "obj.method() = {}", "obj::method = function() {}", "method obj() {}", "Методы нельзя добавлять в объект"],
        correct: 0
    },
    {
        question: "Как вставить переменную в строку при интерполяции?",
        answers: ["Использовать `${}` внутри шаблонных строк", "Использовать \" + переменная + \"", "Использовать &{}", "Никак", "Использовать @{}"],
        correct: 0
    },
    {
        question: "Как получить символ строки по индексу?",
        answers: ["str[index]", "str.charAt(index)", "Оба верны", "str.get(index)", "str[index] или str(index)"],
        correct: 2
    },
    {
        question: "Как получить длину строки?",
        answers: ["str.length", "str.size", "str.count", "str.getLength()", "str.len"],
        correct: 0
    },
    {
        question: "Как округлить число вниз?",
        answers: ["Math.floor(num)", "Math.ceil(num)", "Math.round(num)", "Math.truncate(num)", "Math.min(num)"],
        correct: 0
    },
    {
        question: "Как создать массив?",
        answers: ["let arr = []", "let arr = new Array()", "Оба верны", "let arr = { }", "let arr = list()"],
        correct: 2
    },
    {
        question: "Что делает метод slice()?",
        answers: ["Создаёт копию части массива", "Добавляет элемент в конец массива", "Изменяет текущий массив", "Объединяет массивы", "Удаляет элементы из массива"],
        correct: 0
    },
    {
        question: "Что делает метод concat()?",
        answers: ["Объединяет массивы", "Удаляет элементы массива", "Изменяет текущий массив", "Возвращает первый элемент", "Делает копию части массива"],
        correct: 0
    },
    {
        question: "Что делает метод split()?",
        answers: ["Разделяет строку на массив", "Объединяет массив в строку", "Удаляет пробелы в строке", "Изменяет строку", "Добавляет символы в строку"],
        correct: 0
    },
    {
        question: "Что делает метод map()?",
        answers: ["Создаёт новый массив, изменяя элементы", "Фильтрует массив", "Изменяет существующий массив", "Удаляет элементы из массива", "Проверяет наличие элемента в массиве"],
        correct: 0
    },
    {
        question: "Что делает метод filter()?",
        answers: ["Фильтрует массив по условию", "Изменяет каждый элемент массива", "Сортирует массив", "Разделяет массив", "Объединяет массивы"],
        correct: 0
    },
    {
        question: "Что делает метод includes()?",
        answers: ["Проверяет наличие элемента в массиве", "Фильтрует массив", "Добавляет элемент в массив", "Удаляет элемент из массива", "Создаёт копию части массива"],
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
