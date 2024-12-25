import React, { useState } from "react";
import "./OldQuestion.css";

const OldQuestion = () => {
  const [classSelection, setClassSelection] = useState("8");
  const [subjectSelection, setSubjectSelection] = useState("math");

  // Hardcoded data for the past questions with image paths
  const pastQuestions = {
    "8": {
      math: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      science: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      optionalMath: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
    },
    "9": {
      math: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      science: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      optionalMath: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
    },
    "10": {
      math: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      science: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      optionalMath: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",      ],
    },
    "11": {
      math: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      physics: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      chemistry: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
    },
    "12": {
      math: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      physics: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",
      ],
      chemistry: [
        "/public/81.png",
        "/public/82.png",
        "/public/83.png",   
      ],
    },
  };

  return (
    <div className="question-container">
      <div className="filters">
        <label htmlFor="class-selection">Select Class:</label>
        <select
          id="class-selection"
          value={classSelection}
          onChange={(e) => setClassSelection(e.target.value)}
        >
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
          <option value="11">Class 11</option>
          <option value="12">Class 12</option>
        </select>

        <label htmlFor="subject-selection">Select Subject:</label>
        <select
          id="subject-selection"
          value={subjectSelection}
          onChange={(e) => setSubjectSelection(e.target.value)}
        >
          {classSelection === "8" || classSelection === "9" || classSelection === "10" ? (
            <>
              <option value="math">Math</option>
              <option value="science">Science</option>
              <option value="optionalMath">Optional Math</option>
            </>
          ) : (
            <>
              <option value="math">Math</option>
              <option value="physics">Physics</option>
              <option value="chemistry">Chemistry</option>
            </>
          )}
        </select>
      </div>

      <div className="question-images">
        {pastQuestions[classSelection][subjectSelection]?.map((image, index) => (
          <div key={index} className="question-image">
            <img src={image} alt={`Question ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OldQuestion;
