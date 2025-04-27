import Section from "../components/section";
import Card from "../components/card";

/**
 * About.jsx
 * Página "Sobre Mim" com apresentação e habilidades.
 */
export default function About() {
  return (
    <div className="page">
      <Section title="Sobre Mim">
        <Card>
          <p>
            Olá! Eu sou Marcos, desenvolvedor frontend com foco em criar
            interfaces responsivas e com alto impacto visual. Ao longo dos
            últimos anos, trabalhei em projetos que vão desde sites
            institucionais até aplicações web complexas.
          </p>
        </Card>
      </Section>

      <Section title="Habilidades">
        <ul className="skills-list">
          {/* lista de habilidades */}
          <li>React.js</li>
          <li>JavaScript/TypeScript</li>
          <li>CSS3/Sass</li>
          <li>Design Responsivo</li>
          <li>Git & GitHub</li>
        </ul>
      </Section>
    </div>
  );
}
