import reactImageState from "./assets/state-mgmt.png";
import reactImageJsx from "./assets/jsx-ui.png";
import reactCore from "./assets/react-core-concepts.png";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
// kondiisonal rendering

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
              title="Component"
              description="The Core ui building Block"
            />
            <CoreConcept
              img={reactImageJsx}
              title="Props js"
              description="The Core ui building Block"
            />

            <CoreConcept
              img={reactCore}
              title="Jsx"
              description="The Core ui building Block"
            />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton>Components</TabButton>
            <TabButton>Jsx</TabButton>
            <TabButton>Props</TabButton>
            <TabButton>State</TabButton>

          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
