import React from "react";
import Section from "../components/section";
import Card from "../components/card";

/**
 * CursoWeb.jsx
 * Página de explicação do projeto "Curso Web".
 */
export default function CursoWeb() {
  return (
    <div className="page">
      <Section title="Sobre o Curso Web">
        <p>
          O <strong>Curso Web dev</strong> é um projeto didático criado para
          ensinar os fundamentos do desenvolvimento frontend de forma prática e
          interativa. Ao longo do curso, você aprenderá desde a estruturação de
          páginas com HTML até a estilização avançada em CSS e a construção de
          interfaces dinâmicas com React.
        </p>
      </Section>

      <Section title="Tecnologias Utilizadas">
        <div className="projects-grid">
          <Card title="HTML5">Estrutura semântica de páginas</Card>
          <Card title="CSS3">Estilização responsiva e animações</Card>
          <Card title="JavaScript">Lógica, DOM e Fetch API</Card>
          <Card title="React.js">Componentização e estado</Card>
          <Card title="GitHub Pages">Deploy e versionamento</Card>
          <Card title="Figma">Design e prototipagem</Card>
        </div>
      </Section>

      <Section title="Objetivos do Projeto">
        <ul className="skills-list">
          <li>Compreender a hierarquia e semântica do HTML.</li>
          <li>Dominar layouts responsivos usando CSS moderno.</li>
          <li>Manipular o DOM e fazer requisições com JavaScript.</li>
          <li>Componentizar interfaces com React e Hooks.</li>
          <li>Realizar deploy em GitHub Pages.</li>
        </ul>
      </Section>

      <Section title="Como Acessar o Projeto">
        <p>
          O código-fonte está disponível no GitHub, e a versão online pode ser
          acessada via GitHub Pages:
        </p>
        <a
          href="https://kyhaiu.github.io/curso-web/"
          className="custom-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Demo no GitHub Pages
        </a>
      </Section>
      <Section title="Contribuições e Feedback">
        <p>
          Para contribuir ou sugerir melhorias, sinta-se à vontade para abrir
          issues ou pull requests no repositório.
        </p>
        <a
          href="https://github.com/Kyhaiu/curso-web"
          className="custom-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver Código no GitHub
        </a>
      </Section>
    </div>
  );
}
