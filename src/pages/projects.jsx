import Section from "../components/section";
import Card from "../components/card";

/**
 * Projects.jsx
 * Página de listagem de projetos com cartões de apresentação.
 */
export default function Projects() {
  // array de projetos para demonstração
  const projects = [
    { id: 1, name: "Portfólio Pessoal", tech: "React" },
    { id: 2, name: "Blog de Tecnologia", tech: "Next.js" },
    { id: 3, name: "Loja Virtual", tech: "Gatsby + Stripe" },
  ];

  return (
    <div className="page">
      <Section title="Projetos">
        <div className="projects-grid">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.name}
              footer={`Tecnologia: ${project.tech}`}
            >
              <p>Descrição do projeto aqui...</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
