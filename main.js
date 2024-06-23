const questions = [
    "Установите flex display для контейнера.",
    "Установите направление flex-элементов в колонку.",
    "Установите выравнивание элементов по центру.",
    "Установите выравнивание элементов по центру вертикально."
];

const answers = [
    "display: flex;",
    "flex-direction: column;",
    "justify-content: center;",
    "align-items: center;"
];

let currentQuestionIndex = 0;

function loadQuestion() {
    const { questionText, feedback, answerInput } = getElements(); // Получаем нужные элементы

    questionText.textContent = questions[currentQuestionIndex];
    feedback.textContent = '';
    answerInput.value = '';
}

function checkAnswer() {
    const answerInput = getElements().answerInput.value.trim();
    const feedback = getElements().feedback;

    if (answerInput === answers[currentQuestionIndex]) {
        feedback.textContent = 'Правильно!';
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion();
            } else {
                feedback.textContent = 'Вы завершили все вопросы!';
                getElements().questionText.textContent = ''; // Очищаем текст вопроса
            }
        }, 2000); // Задержка 2 секунды
    } else {
        feedback.textContent = 'Неправильно, попробуйте ещё раз.';
    }
}

function getElements() {
    return {
        questionText: document.getElementById('question-text'),
        feedback: document.getElementById('feedback'),
        answerInput: document.getElementById('answer-input')
    };
}

document.addEventListener('DOMContentLoaded', loadQuestion);
