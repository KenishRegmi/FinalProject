import React from "react";
import { Link } from "react-router-dom";
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-left">
          <h2 className="home-left-logo">Best learning platform</h2>
          <h2 className="home-left-tagline">For Learning</h2>
          <p className="home-left-para">
            Welcome to our educational hub! Explore interactive games, exciting
            quizzes, and creative activities tailored for students from classes
            1 to 10. Designed to make learning fun and engaging, our platform
            helps students master concepts while enjoying the process. Teachers
            can also access resources to enhance classroom experiences and inspire.
          </p>
          <div className="buttons">
            <button className="join">Join for free</button>
            <button className="subscription">Join with subscription</button>
          </div>
        </div>
        <div className="home-right">
          <img src="./public/1.png" alt="Learning Platform" />
        </div>
      </div>

      {/* Most Popular Games Section */}
      <div className="home-second-container">
        <div className="home-second-child">
          <h2 className="game">Most Popular Games</h2>
          <Link to={{ pathname: "/games" }}>
            <button className="vgame">View all</button>
          </Link>
        </div>
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/braimy.png" alt="Memory Test" />
                  <div className="overlay">Class 1-2</div>
                </div>
                <div className="course-info">
                  <h3>Braimy</h3>
                  <p>
                   Brainy is a engaging game for class 1-2 students. It is a fun game to play. It keeps the mind fresh. 
                  </p>
                  <Link to={{ pathname: "/memorytest" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/memory.jpg" alt="Memory Test" />
                  <div className="overlay">Class 1-2</div>
                </div>
                <div className="course-info">
                  <h3>Memory Test</h3>
                  <p>
                    Memory Test is an engaging game to improve your memory. Let's see how good your memory is. Can you become the best among the rest?
                  </p>
                  <Link to={{ pathname: "/memorytest" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/blaster.jpg" alt="Math Blaster" />
                  <div className="overlay">Class 1-10</div>
                </div>
                <div className="course-info">
                  <h3>Math Blaster</h3>
                  <p>
                    Math Blaster: A game where you solve questions in a given period of time. I challenge you to get the 500+ score. Can you do it?
                  </p>
                  <Link to={{ pathname: "/math" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Quizzes Section */}
      <div className="home-second-container">
        <div className="home-second-child">
          <h2 className="game">Most Popular Quizzes</h2>
          <button className="vgame">View all</button>
        </div>
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/math.png" alt="Math Quiz" />
                  <div className="overlay">Class 1-10</div>
                </div>
                <div className="course-info">
                  <h3>Math Quiz</h3>
                  <p>
                    Engage in a fun, interactive math quiz designed to challenge
                    problem-solving skills, improve accuracy, and make learning
                    enjoyable!
                  </p>
                  <Link to={{ pathname: "/mathquizgame" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/flag.png" alt="Math Quiz" />
                  <div className="overlay">Class 6-10</div>
                </div>
                <div className="course-info">
                  <h3>Geogrpahy Quiz</h3>
                  <p>
Engage in a geography quiz and guess the flag of the every country. let see how many flags do you know
                  </p>
                  <Link to={{ pathname: "/gquiz" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/science.png" alt="Science Quiz" />
                  <div className="overlay">Class 5-10</div>
                </div>
                <div className="course-info">
                  <h3>Science Quiz</h3>
                  <p>
                    Explore the wonders of science with an exciting quiz to test
                    knowledge, spark curiosity, and enhance learning for all!
                  </p>
                  <Link to={{ pathname: "/squiz" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Most Popular Puzzles Section */}
      <div className="home-second-container">
        <div className="home-second-child">
          <h2 className="game">Most Popular Puzzles</h2>
          <button className="vgame">View all</button>
        </div>
        <div className="home-second-game">
          <div className="second-game-child1">
            <div className="courses">
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/puzz1.png" alt="Math Puzzle" />
                  <div className="overlay">Class 3-6</div>
                </div>
                <div className="course-info">
                  <h3>Math Puzzle</h3>
                  <p>
                    Engage in a fun, interactive math puzzle designed to
                    challenge problem-solving skills, improve accuracy, and make
                    learning enjoyable!
                  </p>
                  <Link to={{ pathname: "/mathpuzzlegame" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/periodic.jpg" alt="Science Puzzle" />
                  <div className="overlay">Class 6-10</div>
                </div>
                <div className="course-info">
                  <h3>Science Puzzle</h3>
                  <p>
                    Fill all the elements in the periodic table to win the game.
                    Be the best and get the highest score! Remember all the
                    elements in the table.
                  </p>
                  <Link to={{ pathname: "/sciencepuzzlegame" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
              <div className="course-card">
                <div className="image-wrapper">
                  <img src="./public/history.jpg" alt="Science Puzzle" />
                  <div className="overlay">Class 6-10</div>
                </div>
                <div className="course-info">
                  <h3>History Puzzle</h3>
                  <p>
How much good is your history? Can you get the full score. Click on lets play to find out
                  </p>
                  <Link to={{ pathname: "/hpuzzle" }}>
                    <button className="enroll-button">Let's Play</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
