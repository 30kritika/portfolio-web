import '/src/components/styles/skill.css';

const skills = [
  { name: "Web Design", percent: 60 },
  { name: "Front End Development", percent: 90 },
  { name: "React JS", percent: 70 },
  { name: "JavaScript", percent: 50 },
];

const Skill = () => {
  return (
    <div className="skills-section">
      <h2 className="skill-head">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-header">
              <strong>{skill.name}</strong> <span>{skill.percent}%</span>
            </div>
            <div className="skill-bar">
              <div
                className="skill-bar-fill"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
