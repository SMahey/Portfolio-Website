import "./about.css";

import real from "../../img/real.jpeg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={real}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
        I am a computer Science student at Memeorial University of Newfoundand. I am a solution-oriented Computer Scientist with an entrepreneurial mentality. I am Passionate about Full Stack Web Development and educating the next generation of technology users and innovators. I have participated in the competitions such as Hackathon, Green Olympiad, Science Olympiad and Math Olympiad.
        </p>
        
      </div>
    </div>
  );
};

export default About;
