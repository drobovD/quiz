import { useState } from "react";
import React from "react";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [showScores, setShowScores] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const quizQuestions = [
    {
      id: 1,
      question: "В каком возрасте я научился читать?",
      answer: [
        { answerText: 3, isCorrect: false },
        { answerText: 4, isCorrect: true },
        { answerText: 5, isCorrect: false },
        { answerText: 6, isCorrect: false },
      ],
    },

    {
      id: 2,
      question: "Кем я был на протяжении всего обучения в школе?",
      answer: [
        { answerText: "Троечником", isCorrect: false },
        { answerText: "Ударником", isCorrect: false },
        { answerText: "Отличником без золотой медали", isCorrect: true },
        { answerText: "Отличником с золотой медалью", isCorrect: false },
      ],
    },

    {
      id: 3,
      question: "Сколько раз в детстве я успел побывать в летнем лагере?",
      answer: [
        { answerText: "Ни разу", isCorrect: false },
        { answerText: 2, isCorrect: false },
        { answerText: 4, isCorrect: true },
        { answerText: 6, isCorrect: false },
      ],
    },

    {
      id: 4,
      question: "Были ли у меня когда-нибудь серьезные отношения?",
      answer: [
        { answerText: "Нет", isCorrect: true },
        { answerText: "Да", isCorrect: false },
      ],
    },

    {
      id: 5,
      question:
        "Летом 2023 года я побывал сразу в двух населенных пунктах одного региона России, в том числе и в его административном центре. О каком городе идет речь?",
      answer: [
        { answerText: "Москва", isCorrect: false },
        { answerText: "Санкт-Петербург", isCorrect: false },
        { answerText: "Екатеринбург", isCorrect: false },
        { answerText: "Краснодар", isCorrect: false },
        { answerText: "Нижний Новгород", isCorrect: false },
        { answerText: "Красноярск", isCorrect: true },
      ],
    },

    {
      id: 6,
      question:
        "Впервые я выехал за пределы Омской области летом 2011 года. В каком городе я оказался тем летом?",
      answer: [
        { answerText: "Калининград", isCorrect: false },
        { answerText: "Казань", isCorrect: false },
        { answerText: "Москва", isCorrect: false },
        { answerText: "Адлер", isCorrect: true },
      ],
    },

    {
      id: 7,
      question: "Какую спортивную секцию я посетил раньше остальных?",
      answer: [
        { answerText: "Футбол", isCorrect: false },
        { answerText: "Баскетбол", isCorrect: false },
        { answerText: "Настольный теннис", isCorrect: false },
        { answerText: "Плавание", isCorrect: false },
        { answerText: "Рукопашный бой", isCorrect: true },
        { answerText: "Бокс", isCorrect: false },
      ],
    },

    {
      id: 8,
      question: "За каким видом спорта я слежу пристальнее всего?",
      answer: [
        { answerText: "Футбол", isCorrect: false },
        { answerText: "Хоккей", isCorrect: true },
        { answerText: "Баскетбол", isCorrect: false },
        { answerText: "Биатлон", isCorrect: false },
      ],
    },

    {
      id: 9,
      question:
        "Впервые я коснулся программирования на факультативе от ОмГТУ по C#. В каком году это было?",
      answer: [
        { answerText: 2014, isCorrect: false },
        { answerText: 2016, isCorrect: false },
        { answerText: 2017, isCorrect: true },
        { answerText: 2019, isCorrect: false },
      ],
    },

    {
      id: 10,
      question:
        "Моим первым домашним питомцем был кот. Какая у него была порода?",
      answer: [
        { answerText: "Курильский бобтейл", isCorrect: true },
        { answerText: "Персидская кошка", isCorrect: false },
        { answerText: "Мейн-кун", isCorrect: false },
        { answerText: "Британская короткошерстная кошка", isCorrect: false },
      ],
    },
  ];

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScores(false);
  };

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    let nextQuestion = currentQuestion + 1;
    nextQuestion < quizQuestions.length
      ? setCurrentQuestion(nextQuestion)
      : setShowScores(true);
  };

  return (
    <div className="quiz-section">
      {showScores ? (
        <div className="show-score-section">
            <h1 className="final-score">Итоговый результат:</h1>
            <p id="second-paragraph">{score} из {quizQuestions.length} баллов!</p>
            {score >= 0 && score < 4 && (<p id="second-paragraph">Вы совсем меня не знаете &#128541; Но ничего страшного!</p>)}
            {score >= 4 && score < 8 && (<p id="second-paragraph">Какие-то факты обо мне вам известны, но мы с вами все же пока не близкие друзья &#128527;</p>)}
            {score >= 8 && score < 10 && (<p id="second-paragraph">Кажется, мы с вами очень близко знакомы &#128521; И все же есть небольшие погрешности &#129325; </p>)}
            {score === 10 && (<p id="second-paragraph">Это случайно не я отвечал на вопросы??? &#128563; Поздравляю, вы знаете меня примерно так же, как и себя!!! &#129321;&#129321;&#129321;</p>)}
            <button id="delay" onClick={() => restartGame()}>Пройти заново</button>
        </div>
      ) : (
        <div className="question-section">
          <div className="text-question-section">
            <h1>
              {quizQuestions[currentQuestion].id}.{" "}
              {quizQuestions[currentQuestion].question}
            </h1>
          </div>
          <div className="answer-section">
            {quizQuestions[currentQuestion].answer.map((a) => (
              <button onClick={() => handleAnswerClick(a.isCorrect)}>
                {a.answerText}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
