import React, { useState, useEffect } from "react";
import "./ScienceQuiz.css";

const ScienceQuiz = () => {
  const questions = [
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correctAnswer: "H2O",
    },
    {
      question: "What planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Venus", "Jupiter"],
      correctAnswer: "Mars",
    },
    {
      question: "Who is known as the father of modern physics?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Nikola Tesla"],
      correctAnswer: "Albert Einstein",
    },
    {
      question: "What is the process by which plants make their own food?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Evaporation"],
      correctAnswer: "Photosynthesis",
    },
    {
      question: "What is the chemical formula for methane?",
      options: ["CH4", "C2H6", "CO2", "O2"],
      correctAnswer: "CH4",
    },
    // Add more questions if needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswerSelect = (selectedAnswer) => {
    setUserAnswer(selectedAnswer);

    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 10); // Correct answer gives 10 points
    } else {
      setScore(score - 5); // Incorrect answer loses 5 points
    }

    // Move to the next question after 1 second
    setTimeout(() => {
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setGameOver(true); // End the game if all questions are answered
      }
      setUserAnswer(null); // Reset selected answer
    }, 1000);
  };

  return (
    <div className="science">
    <div className="science-quiz-container">
      <h1 className="science-quiz-title">Science Quiz</h1>
      {gameOver ? (
        <div className="science-game-over">
          <h2>Game Over!</h2>
          <p>Your final score is: {score}</p>
          <button onClick={() => window.location.reload()} className="science-restart-button">
            Play Again
          </button>
        </div>
      ) : (
        <div className="science-question-container">
          <h2 className="science-question">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="science-options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`science-option-button ${
                  userAnswer === option
                    ? option === questions[currentQuestionIndex].correctAnswer
                      ? "science-correct-answer"
                      : "science-incorrect-answer"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="science-score">
            <p>Score: {score}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default ScienceQuiz;
