import { useState } from "react";
import reactImageState from "./assets/state-mgmt.png";
import reactImageJsx from "./assets/jsx-ui.png";
import reactCore from "./assets/react-core-concepts.png";
import Header from "./components/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data.js";
// kondiisonal rendering

function App() {
  const [activeTab, setActiveTab] = useState("components");

  function ClickTab(ClickedTab) {
    setActiveTab(ClickedTab);
    console.log(ClickedTab);
  }

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
            <TabButton onSelected={() => ClickTab("components")}>
              Components
            </TabButton>
            <TabButton onSelected={() => ClickTab("jsx")}>Jsx</TabButton>
            <TabButton onSelected={() => ClickTab("props")}>Props</TabButton>
            <TabButton onSelected={() => ClickTab("state")}>State</TabButton>
          </menu>
          <div id="tab-content">
            <h3>{EXAMPLES[activeTab].title}</h3>
            <p>{EXAMPLES[activeTab].description}</p>
            <pre>
              <code>{EXAMPLES[activeTab].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
