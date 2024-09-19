import reactImage from "./assets/react-core-concepts.png";
import reactImageState from "./assets/state-mgmt.png";
import reactImageJsx from "./assets/jsx-ui.png";

// kondiisonal rendering

const reactDescriptions = ["Fundamental", "Crucial", "core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt=".." />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function Header() {
  const desc = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} alt="Stylized atom" />
      <h1>React Essentials Tse</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />

      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              img={reactImageState}
              title="Props"
              description="The Core ui building Block"
            />
            <CoreConcept
              img={reactImageJsx}
              title="Props js"
              description="The Core ui building Block"
            />
            <CoreConcept />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
