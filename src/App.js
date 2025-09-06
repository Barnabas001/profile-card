//import logo from "./logo.svg";
import "./App.css";

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
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="💪" color="blue" />
      <Skill skill="Next Js" emoji="💪" color="green" />
      <Skill skill="HTML+CSS" emoji="💪" color="orange" />
      <Skill skill="JavaScript" emoji="💪" color="yellow" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
