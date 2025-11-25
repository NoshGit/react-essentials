import './CoreConcept.css';
import { CORE_CONCEPTS } from './data.js';
import ConceptCard from './ConceptCard';

const CoreConcept = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concept Component</h2>
      <ul>
        {CORE_CONCEPTS.map((concept) => (
          <ConceptCard {...concept} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConcept;
