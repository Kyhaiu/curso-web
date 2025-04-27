import React from "react";

/**
 * Section.jsx
 * Bloco de seção que envolve conteúdo com título e ID para navegação.
 * Props:
 * - title: título da seção (opcional)
 * - id: identificador para âncoras
 * - children: conteúdo interno da seção
 */
export default function Section({ title, children, id }) {
  return (
    <section id={id} className="section">
      {title && <h2 className="section-title">{title}</h2>}{" "}
      {/* título da seção */}
      <div className="section-content">{children}</div>{" "}
      {/* conteúdo da seção */}
    </section>
  );
}
