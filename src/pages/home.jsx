import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import Section from "../components/section";
import Card from "../components/card";
import Button from "../components/button";

/**
 * Home.jsx
 * Página inicial com hero e últimas postagens.
 */
export default function Home() {
  const [posts, setPosts] = useState([]); // estado local para armazenar posts

  // busca posts fictícios da API ao montar o componente
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 3))); // pega apenas os 3 primeiros
  }, []);

  return (
    <div className="page">
      {/* Hero Section */}
      <Section>
        <div className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Desenvolvedor Frontend Criativo</h1>
            <p className="hero-text">
              Transformo ideias em experiências digitais envolventes.
            </p>
            {/* CTA para navegar até posts */}
            <Button className="cta-button">
              Explorar Projetos Recentes <FiArrowRight />
            </Button>
          </div>
        </div>
      </Section>

      {/* Seção de Novidades */}
      <Section title="Novidades" id="posts">
        <div className="posts-grid">
          {posts.map((post) => (
            <Card key={post.id} title={post.title} footer={`Post #${post.id}`}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
