import React, { useState } from "react";
import "./InteractiveVideos.css";

const InteractiveVideos = () => {
  const videoData = {
    1: [
      { subject: "English", title: "Learn Alphabet and Numbers", url: "https://www.youtube.com/embed/drlIUqRYM-w?si=BU5J43LoyE1Kz48_" },
      { subject: "English", title: "Phonics Song for Kids", url: "https://www.youtube.com/embed/BELlZKpi1Zs" },
      { subject: "Math", title: "Basic Addition and Subtraction", url: "https://www.youtube.com/embed/mjlsSYLLOSE?si=j2X9MLUI7xfPjg61" },
      { subject: "Math", title: "Counting and Patterns", url: "https://www.youtube.com/embed/GddAGHgH1IM?si=ANm92nuixix_VzHa" },
    ],
    2: [
      { subject: "Science", title: "Fun Science for Kids", url: "https://www.youtube.com/embed/BEdfwxKCSPc?si=mnJrjkSmX1qbYVOk" },
      { subject: "Science", title: "Animal Habitats for Kids", url: "https://www.youtube.com/embed/H_CSlLIuVZs" },
      { subject: "Math", title: "Understanding Place Value", url: "https://www.youtube.com/embed/Paza3CbdamI?si=mqXTBKFa1tVPrmD5" },
      { subject: "Math", title: "Shapes and Measurements", url: "https://www.youtube.com/embed/guNdJ5MtX1A" },
    ],
    3: [
      { subject: "Science", title: "Cool Science Experiments", url: "https://www.youtube.com/embed/MFHrmbo9vlw?si=Qk8OE5VcXCrTVVuL" },
      { subject: "Science", title: "Food Chain Basics", url: "https://www.youtube.com/embed/YuO4WB4SwCg?si=1Oo42beZ6S4Eabe8" },
      { subject: "Math", title: "Introduction to Multiplication", url: "https://www.youtube.com/embed/_HEnohs6yYw" },
      { subject: "Math", title: "Division Made Simple", url: "https://www.youtube.com/embed/wbkHv9zcGhI?si=7uaKU3kXg5kL_jaX" },
    ],
    4: [
      { subject: "Math", title: "Introduction to Fractions", url: "https://www.youtube.com/embed/N3__8MmaiLE?si=AEZxVerX3mc-nINX" },
      { subject: "Math", title: "Decimals Explained", url: "https://www.youtube.com/embed/9frz4ODJUc0?si=7ZpeB54y2Vt2W--h" },
      { subject: "Science", title: "Water Cycle Explained", url: "https://www.youtube.com/embed/TWb4KlM2vts" },
      { subject: "Science", title: "Basics of Energy", url: "https://www.youtube.com/embed/Q0LBegPWzrg?si=A1FZKNw_We4v-MwcU" },
    ],
    5: [
      { subject: "Environmental Science", title: "Environmental Science Basics", url: "https://www.youtube.com/embed/62AL0fRMPWA" },
      { subject: "Environmental Science", title: "Pollution and its Impact", url: "https://www.youtube.com/embed/DxMxkHZR2yQ" },
      { subject: "Math", title: "Decimals and Percentages", url: "https://www.youtube.com/embed/FmzivQm-OOU" },
      { subject: "Math", title: "Geometry Basics", url: "https://www.youtube.com/embed/rAfaeCLpA7g" },
    ],
    6: [
      { subject: "Science", title: "Fun with Magnets", url: "https://www.youtube.com/embed/EIYb5KDWy1o" },
      { subject: "Science", title: "Electricity Basics", url: "https://www.youtube.com/embed/3YrGz8PpQYA" },
      { subject: "Math", title: "Understanding Ratios", url: "https://www.youtube.com/embed/QwTtH5f3bAk" },
      { subject: "Math", title: "Introduction to Algebra", url: "https://www.youtube.com/embed/ZqSYm9hGR6U" },
    ],
    7: [
        { subject: "Science", title: "Understanding the Solar System", url: "https://www.youtube.com/embed/6B-dvoYG8uI" },
        { subject: "Science", title: "Human Body Systems", url: "https://www.youtube.com/embed/i7iGGRdTpCs" },
        { subject: "Math", title: "Advanced Geometry", url: "https://www.youtube.com/embed/OmJ-4B-mS-Y" },
        { subject: "Math", title: "Introduction to Probability", url: "https://www.youtube.com/embed/MTrU5Q7gqXs" },
      ],
      8: [
        { subject: "Science", title: "Periodic Table Basics", url: "https://www.youtube.com/embed/tQP2lt92snU" },
        { subject: "Science", title: "Force and Pressure", url: "https://www.youtube.com/embed/DO7wTHstIbw" },
        { subject: "Math", title: "Linear Equations", url: "https://www.youtube.com/embed/d7-oNn8Ebyc" },
        { subject: "Math", title: "Understanding Pythagoras Theorem", url: "https://www.youtube.com/embed/VB9uVew-Y-M" },
      ],
      9: [
        { subject: "Physics", title: "Laws of Motion", url: "https://www.youtube.com/embed/5oi5j11FkQg?si=CFdIodEQOJEKWslp" },
        { subject: "Physics", title: "Gravitation", url: "https://www.youtube.com/embed/YhVLXsG_UFk?si=DgK6gRUl3ixBA8Fb" },
        { subject: "Math", title: "Introduction to Quadratic Equations", url: "https://www.youtube.com/embed/lhQKfuAVkm4" },
        { subject: "Math", title: "Understanding Coordinate Geometry", url: "https://www.youtube.com/embed/K_fsXEBwRpg?si=_wclhaOtM4vzq1lL" },
      ],
      10: [
        { subject: "Math", title: "Introduction to Trigonometry", url: "https://www.youtube.com/embed/-7Y13YIkPSo?si=Vb1v0eMqJQ-JCPEM" },
        { subject: "Math", title: "Statistics Explained", url: "https://www.youtube.com/embed/EYe-5bI4MLE?si=yhCwSUzBGtqbJ8X_" },
        { subject: "Physics", title: "Light - Reflection and Refraction", url: "https://www.youtube.com/embed/--tPQ4iui1c?si=RkMdFSdk-i1rl4nU" },
        { subject: "Physics", title: "Electric Current", url: "https://www.youtube.com/embed/2BxS3lzp8P0?si=44mKtib8a4sokYPw" },
      ],
    };
  
    const [selectedClass, setSelectedClass] = useState(1);
    const [selectedSubject, setSelectedSubject] = useState("English");
  
    const subjects = Array.from(
      new Set(videoData[selectedClass]?.map((video) => video.subject))
    );
  
    const filteredVideos = videoData[selectedClass]?.filter(
      (video) => video.subject === selectedSubject
    );
  
    return (
      <div className="video">
        <div className="video-section">
          <h1>Interactive Videos</h1>
          <p>Select your class and subject to explore engaging educational videos!</p>
          <div className="video-controls">
            <label>
              Class:
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(Number(e.target.value))}
              >
                {Object.keys(videoData).map((classNum) => (
                  <option key={classNum} value={classNum}>
                    Class {classNum}
                  </option>
                ))}
              </select>
            </label>
            <label>
              Subject:
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
              >
                {subjects.map((subject) => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="video-grid">
            {filteredVideos?.map((video, index) => (
              <div key={index} className="video-card">
                <h3>{video.title}</h3>
                <iframe
                  src={video.url}
                  title={`${video.title}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default InteractiveVideos;

