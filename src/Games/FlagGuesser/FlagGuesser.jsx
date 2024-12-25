import React, { useState, useEffect } from "react";
import "./FlagGuesser.css";

const FlagGuesser = () => {
  const flagData = [
    { country: "India", flag: "https://flagcdn.com/w320/in.png" },
    { country: "France", flag: "https://flagcdn.com/w320/fr.png" },
    { country: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
    { country: "Germany", flag: "https://flagcdn.com/w320/de.png" },
    { country: "United States", flag: "https://flagcdn.com/w320/us.png" },
    { country: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
    { country: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
    { country: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
    { country: "Australia", flag: "https://flagcdn.com/w320/au.png" },
    { country: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    { country: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
    { country: "Italy", flag: "https://flagcdn.com/w320/it.png" },
    { country: "Spain", flag: "https://flagcdn.com/w320/es.png" },
    { country: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
    { country: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
    { country: "China", flag: "https://flagcdn.com/w320/cn.png" },
    { country: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
    { country: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
    { country: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
    { country: "Norway", flag: "https://flagcdn.com/w320/no.png" },
    { country: "Denmark", flag: "https://flagcdn.com/w320/dk.png" },
    { country: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
    { country: "New Zealand", flag: "https://flagcdn.com/w320/nz.png" },
    { country: "Saudi Arabia", flag: "https://flagcdn.com/w320/sa.png" },
    { country: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
    { country: "Switzerland", flag: "https://flagcdn.com/w320/ch.png" },
    { country: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
    { country: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
    { country: "Vietnam", flag: "https://flagcdn.com/w320/vn.png" },
    { country: "Malaysia", flag: "https://flagcdn.com/w320/my.png" },
    { country: "Singapore", flag: "https://flagcdn.com/w320/sg.png" },
    { country: "Philippines", flag: "https://flagcdn.com/w320/ph.png" },
    { country: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
    { country: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
    { country: "Poland", flag: "https://flagcdn.com/w320/pl.png" },
    { country: "Austria", flag: "https://flagcdn.com/w320/at.png" },
    { country: "Ireland", flag: "https://flagcdn.com/w320/ie.png" },
    { country: "Czech Republic", flag: "https://flagcdn.com/w320/cz.png" },
    { country: "Hungary", flag: "https://flagcdn.com/w320/hu.png" },
    { country: "Finland", flag: "https://flagcdn.com/w320/fi.png" },
    { country: "Chile", flag: "https://flagcdn.com/w320/cl.png" },
    { country: "Peru", flag: "https://flagcdn.com/w320/pe.png" },
    { country: "Colombia", flag: "https://flagcdn.com/w320/co.png" },
    { country: "Venezuela", flag: "https://flagcdn.com/w320/ve.png" },
    { country: "Ukraine", flag: "https://flagcdn.com/w320/ua.png" },
    { country: "Belarus", flag: "https://flagcdn.com/w320/by.png" },
    { country: "Romania", flag: "https://flagcdn.com/w320/ro.png" },
    { country: "Bulgaria", flag: "https://flagcdn.com/w320/bg.png" },
    { country: "Slovakia", flag: "https://flagcdn.com/w320/sk.png" },
    { country: "Croatia", flag: "https://flagcdn.com/w320/hr.png" },
    { country: "Serbia", flag: "https://flagcdn.com/w320/rs.png" },
    { country: "Bosnia and Herzegovina", flag: "https://flagcdn.com/w320/ba.png" },
    { country: "Slovenia", flag: "https://flagcdn.com/w320/si.png" },
    { country: "Morocco", flag: "https://flagcdn.com/w320/ma.png" },
    { country: "Tunisia", flag: "https://flagcdn.com/w320/tn.png" },
    { country: "Algeria", flag: "https://flagcdn.com/w320/dz.png" },
    { country: "Ethiopia", flag: "https://flagcdn.com/w320/et.png" },
    { country: "Kenya", flag: "https://flagcdn.com/w320/ke.png" },
    { country: "Nigeria", flag: "https://flagcdn.com/w320/ng.png" },
    { country: "Ghana", flag: "https://flagcdn.com/w320/gh.png" },
    { country: "Uganda", flag: "https://flagcdn.com/w320/ug.png" },
    { country: "Tanzania", flag: "https://flagcdn.com/w320/tz.png" },
    { country: "Zimbabwe", flag: "https://flagcdn.com/w320/zw.png" },
    { country: "Zambia", flag: "https://flagcdn.com/w320/zm.png" },
    { country: "Mozambique", flag: "https://flagcdn.com/w320/mz.png" },
    { country: "Botswana", flag: "https://flagcdn.com/w320/bw.png" },
    { country: "Namibia", flag: "https://flagcdn.com/w320/na.png" },
    { country: "Angola", flag: "https://flagcdn.com/w320/ao.png" },
    { country: "Ivory Coast", flag: "https://flagcdn.com/w320/ci.png" },
    { country: "Senegal", flag: "https://flagcdn.com/w320/sn.png" },
    { country: "Cuba", flag: "https://flagcdn.com/w320/cu.png" },
    { country: "Haiti", flag: "https://flagcdn.com/w320/ht.png" },
    { country: "Jamaica", flag: "https://flagcdn.com/w320/jm.png" },
    { country: "Dominican Republic", flag: "https://flagcdn.com/w320/do.png" },
    { country: "Trinidad and Tobago", flag: "https://flagcdn.com/w320/tt.png" },
    { country: "Panama", flag: "https://flagcdn.com/w320/pa.png" },
    { country: "Costa Rica", flag: "https://flagcdn.com/w320/cr.png" },
    { country: "El Salvador", flag: "https://flagcdn.com/w320/sv.png" },
    { country: "Guatemala", flag: "https://flagcdn.com/w320/gt.png" },
    { country: "Honduras", flag: "https://flagcdn.com/w320/hn.png" },
    { country: "Ecuador", flag: "https://flagcdn.com/w320/ec.png" },
    { country: "Bolivia", flag: "https://flagcdn.com/w320/bo.png" },
    { country: "Paraguay", flag: "https://flagcdn.com/w320/py.png" },
    { country: "Uruguay", flag: "https://flagcdn.com/w320/uy.png" },
    { country: "Iraq", flag: "https://flagcdn.com/w320/iq.png" },
    { country: "Iran", flag: "https://flagcdn.com/w320/ir.png" },
    { country: "Pakistan", flag: "https://flagcdn.com/w320/pk.png" },
    { country: "Bangladesh", flag: "https://flagcdn.com/w320/bd.png" },
    { country: "Sri Lanka", flag: "https://flagcdn.com/w320/lk.png" },
    { country: "Nepal", flag: "https://flagcdn.com/w320/np.png" },
    { country: "Maldives", flag: "https://flagcdn.com/w320/mv.png" },
];
  const [currentFlag, setCurrentFlag] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  const generateQuestion = () => {
    const randomFlag = flagData[Math.floor(Math.random() * flagData.length)];
    const shuffledOptions = shuffleArray(
      flagData
        .filter((item) => item.country !== randomFlag.country)
        .slice(0, 3)
        .concat(randomFlag)
    );

    setCurrentFlag(randomFlag);
    setOptions(shuffledOptions);
  };

  const handleOptionClick = (selectedCountry) => {
    setAttempts(attempts + 1);
    if (selectedCountry === currentFlag.country) {
      setScore(score + 1);
    }

    if (attempts + 1 === 25) { // Updated to 15 attempts
      setGameOver(true);
    } else {
      generateQuestion();
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setGameOver(false);
    generateQuestion();
  };

  useEffect(() => {
    generateQuestion();
  }, []);

  return (
    <div className="flag">
      <div className="flag-container">
        <h1 className="flag-title">Flag Guesser</h1>
        {gameOver ? (
          <div className="flag-game-over">
            <h2>Game Over</h2>
            <p>Your Score: {score}/25</p> {/* Updated to 15 */}
            <button className="flag-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <div className="flag-question">
              <img
                src={currentFlag.flag}
                alt={currentFlag.country}
                className="flag-image"
              />
              <p>Which country does this flag belong to?</p>
            </div>
            <div className="flag-options">
              {options.map((option) => (
                <button
                  key={option.country}
                  className="flag-option"
                  onClick={() => handleOptionClick(option.country)}
                >
                  {option.country}
                </button>
              ))}
            </div>
            <p className="flag-score">Score: {score}</p>
            <p className="flag-attempts">Attempts: {attempts}/25</p> {/* Updated to 15 */}
          </div>
        )}
      </div>
    </div>
  );
};

export default FlagGuesser;
