import React, { useState, useEffect } from "react";
import "./GeographyQuiz.css";

const GeographyQuiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "India"],
      correctAnswer: "Japan",
    },
    {
      question: "Which is the largest continent by area?",
      options: ["Asia", "Africa", "Europe", "North America"],
      correctAnswer: "Asia",
    },
    {
      question: "What is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      correctAnswer: "Nile",
    },
    {
      question: "Which ocean is the largest by area?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific",
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
    <div className="gquiz">
    <div className="geography-quiz-container">
      <h1 className="quiz-title">Geography Quiz</h1>
      {gameOver ? (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Your final score is: {score}</p>
          <button onClick={() => window.location.reload()} className="restart-button">
            Play Again
          </button>
        </div>
      ) : (
        <div className="question-container">
          <h2 className="question">
            {questions[currentQuestionIndex].question}
          </h2>
          <div className="options-container">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  userAnswer === option
                    ? option === questions[currentQuestionIndex].correctAnswer
                      ? "correct-answer"
                      : "incorrect-answer"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="score">
            <p>Score: {score}</p>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default GeographyQuiz;
