import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <div>
      <div className="about-main">
        <div className="about">
          {/* Introduction Section */}
          <div className="box1 box">
            <h1>LEARN WITH FUN!</h1>
            <p>
              Welcome to <b>Learn with Fun</b>, where education and entertainment come together! 
              Our platform is designed to inspire curiosity and creativity in children through 
              engaging, interactive activities. Created by a passionate team of educators, designers, 
              and child development experts, our mission is to make learning enjoyable and accessible 
              for kids everywhere. We are dedicated to nurturing critical thinking, problem-solving skills, 
              and a lifelong love of learning.
            </p>
          </div>

          {/* Key Features Section */}
          <div className="box2 box">
            <h1>Key Features of Our Website</h1>
            <ul>
              <li>Interactive Educational Games</li>
              <li>Quizzes to Test Knowledge</li>
              <li>Challenging and Fun Puzzles</li>
              <li>Interactive Videos for Every Class</li>
            </ul>
          </div>

          {/* Why Choose Us Section */}
          <div className="box3 box">
            <h1>Why Choose Us?</h1>
            <ul>
              <li>A child-safe, ad-free environment</li>
              <li>Content designed to be fun and engaging</li>
              <li>Encourages self-paced and interactive learning</li>
            </ul>
          </div>

          {/* Target Audience Section */}
          <div className="box4 box">
            <h1>Who It's For</h1>
            <p>
              <b>Learn with Fun</b> is tailored for children aged <b>7 to 16 years</b>, offering 
              age-appropriate resources that cater to diverse learning styles and interests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
