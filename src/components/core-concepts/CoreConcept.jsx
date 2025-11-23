import './CoreConcept.css';
import { CORE_CONCEPTS } from './data.js';
import ConceptCard from './ConceptCard';

const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concept Component</h2>
      <ul>
        <ConceptCard {...CORE_CONCEPTS[0]} />
        <ConceptCard {...CORE_CONCEPTS[1]} />
        <ConceptCard {...CORE_CONCEPTS[2]} />
        <ConceptCard {...CORE_CONCEPTS[3]} />
      </ul>
    </section>
  );
};

export default CoreConcept;
