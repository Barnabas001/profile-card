//import logo from "./logo.svg";
import "./App.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Javascript",
    level: "intermediate",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and Github",
    level: "advanced",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "beginner",
    color: "#60DAFB",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar image="barnabas.jpg" name="barnabas" />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img src={props.image} alt={props.name} className="myImage" />;
}

function Intro() {
  return (
    <div>
      <h1>Barnabas Olayinka Affonshike</h1>
      <p>
        Frontend web developer and geology graduate. When not coding or studing,
        I like to listen to cool/calm music, take a walk, or to just enjoy some
        anime.
      </p>
    </div>
  );
}

function SkillList() {
  const skillList = skills;
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill
          skill={skill.skill}
          
          color={skill.color}
          level={skill.level}
        />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
export default App;
