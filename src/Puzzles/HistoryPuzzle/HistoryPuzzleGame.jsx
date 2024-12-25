import React, { useState, useEffect } from "react";
import "./HistoryPuzzleGame.css";

const HistoryPuzzleGame = () => {
  const puzzles = [
    {
      question: "Who was the first President of the United States?",
      logic: "General knowledge of U.S. history",
      correctAnswer: "George Washington",
      options: ["George Washington", "Thomas Jefferson", "John Adams", "Abraham Lincoln"],
    },
    {
      question: "In which year did World War II end?",
      logic: "Knowledge of major historical events",
      correctAnswer: 1945,
      options: [1939, 1945, 1950, 1942],
    },
    {
      question: "Who discovered America in 1492?",
      logic: "Knowledge of exploration history",
      correctAnswer: "Christopher Columbus",
      options: [
        "Christopher Columbus",
        "Ferdinand Magellan",
        "Leif Erikson",
        "Marco Polo",
      ],
    },
    {
      question: "Which empire was known for building the Colosseum?",
      logic: "Knowledge of ancient empires",
      correctAnswer: "Roman Empire",
      options: ["Roman Empire", "Greek Empire", "Egyptian Empire", "Persian Empire"],
    },
    {
      question: "Who was the first woman to win a Nobel Prize?",
      logic: "General knowledge of historical figures",
      correctAnswer: "Marie Curie",
      options: ["Marie Curie", "Rosalind Franklin", "Ada Lovelace", "Florence Nightingale"],
    },
    // Add more puzzles as needed
  ];

  const [currentPuzzle, setCurrentPuzzle] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleAnswerSelect = (answer) => {
    setUserAnswer(answer);

    if (answer === puzzles[currentPuzzle].correctAnswer) {
      setScore(score + 10); // Add points for correct answer
    } else {
      setScore(score - 5); // Deduct points for incorrect answer
    }

    if (currentPuzzle + 1 < puzzles.length) {
      setTimeout(() => {
        setCurrentPuzzle(currentPuzzle + 1);
        setUserAnswer(""); // Clear selected answer
      }, 1000); // Wait for 1 second before moving to the next question
    } else {
      setTimeout(() => {
        setGameOver(true);
      }, 1000);
    }
  };

  return (
    <div className="history">
    <div className="history-puzzle-container">
      <h1 className="history-puzzle-title">History Puzzle Game</h1>
      <div className="history-puzzle-score">Score: {score}</div>
      {gameOver ? (
        <div className="history-game-over">
          <h2>Game Over!</h2>
          <p>Your final score: {score}</p>
          <button onClick={() => window.location.reload()} className="history-restart-button">
            Play Again
          </button>
        </div>
      ) : (
        <div className="history-question-container">
          <h2 className="history-question">{puzzles[currentPuzzle].question}</h2>
          <p>Hint: {puzzles[currentPuzzle].logic}</p>
          <div className="history-options-container">
            {puzzles[currentPuzzle].options.map((option, index) => (
              <button
                key={index}
                className={`history-option-button ${
                  userAnswer === option
                    ? option === puzzles[currentPuzzle].correctAnswer
                      ? "history-correct-answer"
                      : "history-incorrect-answer"
                    : ""
                }`}
                onClick={() => handleAnswerSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default HistoryPuzzleGame;
