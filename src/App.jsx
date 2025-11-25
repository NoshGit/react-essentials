import { useState } from 'react';
import Header from './components/header/Header';
import CoreConcept from './components/core-concepts/CoreConcept';
import TabButton from './components/tabs/TabButton';
import { EXAMPLES } from './examples';

function App() {
  const [tab, setTab] = useState(null);

  return (
    <div>
      <Header />
      <main>
        <CoreConcept />

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isSelected={tab === 'components'}
              onSelect={() => setTab('components')}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={tab === 'jsx'}
              onSelect={() => setTab('jsx')}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={tab === 'props'}
              onSelect={() => setTab('props')}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={tab === 'state'}
              onSelect={() => setTab('state')}
            >
              State
            </TabButton>
          </menu>

          <div id="tab-content">
            {tab ? (
              <div>
                <h3>{EXAMPLES[tab].title}</h3>
                <p>{EXAMPLES[tab].description}</p>
                <pre>
                  <code>{EXAMPLES[tab].code}</code>
                </pre>
              </div>
            ) : (
              <p>Please select an example tab to view its content.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
