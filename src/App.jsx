import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Aboutus from "./components/About/Aboutus";
import Games from "./components/Games/Games";
import Quizes from "./components/Quiz/Quiz/Quizes";
import MathBlaster from "./Games/MathBlaster/MathBlaster";
import MemoryTest from "./Games/MemoryTest/MemoryTest";
import FlagGuesser from "./Games/FlagGuesser/FlagGuesser";
import PeriodicTableGame from "./Games/PeriodicTableGame/PeriodicTableGame";
import MathPuzzleGame from "./Puzzles/MathPuzzle/MathPuzzleGame";
import SciencePuzzleGame from "./Puzzles/SciencePuzzle/SciencePuzzleGame";
import MathQuizGame from "./MathQuiz/MathQuizGame";
import GeographyQuiz from "./components/GameQuiz/GeographyQuiz/GeographyQuiz";
import ScienceQuiz from "./components/GameQuiz/ScienceQuiz/ScienceQuiz";
import HistoryPuzzleGame from "./Puzzles/HistoryPuzzle/HistoryPuzzleGame";
import InteractiveVideos from "./components/Videos/InteractiveVideos";
import OldQuestion from "./components/OldQuestion/OldQuestion";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/quizes" element={<Quizes />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/math" element={<MathBlaster />} />
        <Route path="/memorytest" element={<MemoryTest />} />
        <Route path="/flagguesser" element={<FlagGuesser />} />
        <Route path="/periodictablegame" element={<PeriodicTableGame />} />
        <Route path="/mathpuzzlegame" element={<MathPuzzleGame />} />
        <Route path="/sciencepuzzlegame" element={<SciencePuzzleGame />} />
        <Route path="/mathquizgame" element={<MathQuizGame />} />
        <Route path="/gquiz" element={<GeographyQuiz />} />
        <Route path="/squiz" element={<ScienceQuiz />} />
        <Route path="/hpuzzle" element={<HistoryPuzzleGame/>} />
        <Route path="/videos" element={<InteractiveVideos/>} />
        <Route path="/questionform" element={<OldQuestion/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
