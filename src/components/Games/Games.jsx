import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Games.css'

const Games = () => {
  // State to store leaderboard
  const [leaderboard, setLeaderboard] = useState([]);

  const handleUpdateLeaderboard = (score) => {
    const newLeaderboard = [...leaderboard, { player: "Player 1", score }];
    setLeaderboard(newLeaderboard);
  };

  const gameData = [
    {
      name: "Math Blaster",
      description:
        "A game where you solve questions in a given period of time. I challenge you to get the 500+ score. Can you do it?",
      image: "./public/blaster.jpg",
      score: 500,
      classInfo: "Class 1-10",
      link: "/math"
    },
    {
      name: "Jump Ladder",
      description:
        "Jump Ladder is an engaging educational game designed to make learning fun and interactive! Players climb a virtual ladder by solving problems.",
      image: "./public/mgames1.jpg",
      score: 450,
      classInfo: "Class 3-5",
      link: "/jumpladder"
    },
    {
      name: "Fold it",
      description:
        "Foldit is a puzzle game where players fold proteins, contributing to real scientific research on protein structures and potential medical breakthroughs.",
      image: "./public/fold.jpg",
      score: 300,
      classInfo: "Class 6-8",
      link: "/fold-it"
    },
    {
      name: "Memory Test",
      description:
        "Memory Test is an engaging game to improve your memory. Let's see how good your memory is. Can you become the best among the rest?",
      image: "./public/memory.jpg",
      score: 350,
      classInfo: "Class 1-2",
      link: "/memorytest"
    },
    {
      name: "Flag Guesser",
      description:
        "Check your geography knowledge. Let's see how many correct flags you can get. Are you a beast in geography?",
      image: "./public/flag.png",
      score: 400,
      classInfo: "Class 6-8",
      link: "/flagguesser"
    },
    {
      name: "Elementals",
      description:
        "Elementals is a science-related game. In this game, you should be able to detect all the elements correctly.",
      image: "./public/periodic.jpg",
      score: 450,
      classInfo: "Class 7-10",
      link: "/periodictablegame"
    }
  ];

  return (
    <div className="games">
      <div className="game-second-container">
        <div className="game-second-child">
          <h2 className="game">Most Popular Games</h2>
        </div>
        <div className="game-second-game">
          <div className="second-game-child1">
            <div className="courses">
              {gameData.slice(0, 3).map((game, index) => (
                <div key={index} className="course-card">
                  <div className="image-wrapper">
                    <img src={game.image} alt={game.name} />
                    <div className="overlay">{game.classInfo}</div>
                  </div>
                  <div className="course-info">
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                    <Link to={game.link}>
                      <button
                        className="enroll-button"
                        onClick={() => handleUpdateLeaderboard(game.score)}
                      >
                        Let's Play
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="game-second-container">
        <div className="game-second-child">
          <h2 className="game">Most Trending Games</h2>
        </div>
        <div className="game-second-game">
          <div className="second-game-child1">
            <div className="courses">
              {gameData.slice(3, 6).map((game, index) => (
                <div key={index} className="course-card">
                  <div className="image-wrapper">
                    <img src={game.image} alt={game.name} />
                    <div className="overlay">{game.classInfo}</div>
                  </div>
                  <div className="course-info">
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                    <Link to={game.link}>
                      <button
                        className="enroll-button"
                        onClick={() => handleUpdateLeaderboard(game.score)}
                      >
                        Let's Play
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="game-second-container">
        <div className="game-second-child">
          <h2 className="game">All Games</h2>
        </div>
        <div className="game-second-game">
          <div className="second-game-child1">
            <div className="courses">
              {gameData.slice(0, 3).map((game, index) => (
                <div key={index} className="course-card">
                  <div className="image-wrapper">
                    <img src={game.image} alt={game.name} />
                    <div className="overlay">{game.classInfo}</div>
                  </div>
                  <div className="course-info">
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                    <Link to={game.link}>
                      <button
                        className="enroll-button"
                        onClick={() => handleUpdateLeaderboard(game.score)}
                      >
                        Let's Play
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="game-second-container">
        <div className="game-second-game">
          <div className="second-game-child1">
            <div className="courses">
              {gameData.slice(3, 6).map((game, index) => (
                <div key={index} className="course-card">
                  <div className="image-wrapper">
                    <img src={game.image} alt={game.name} />
                    <div className="overlay">{game.classInfo}</div>
                  </div>
                  <div className="course-info">
                    <h3>{game.name}</h3>
                    <p>{game.description}</p>
                    <Link to={game.link}>
                      <button
                        className="enroll-button"
                        onClick={() => handleUpdateLeaderboard(game.score)}
                      >
                        Let's Play
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="leaderboard-section">
        <h3 className="leaderboard-title">Leaderboard</h3>
        <div className="leaderboard-list">
          {leaderboard.length > 0 ? (
            leaderboard.map((entry, index) => (
              <div className="leaderboard-entry" key={index}>
                <p>
                  {index + 1}. {entry.player}: {entry.score} points
                </p>
              </div>
            ))
          ) : (
            <p>No leaderboard data available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Games;
