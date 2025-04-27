import React from "react";

/**
 * Card.jsx
 * Componente genérico para cartões de conteúdo.
 * Props:
 * - title: título do cartão (opcional)
 * - children: conteúdo principal do cartão (texto, imagens, etc.)
 * - footer: texto de rodapé (opcional)
 * - className: classes CSS adicionais
 */
export default function Card({ title, children, footer, className = "" }) {
  return (
    <div className={`card ${className}`}>
      {title && <h3 className="card-title">{title}</h3>}{" "}
      {/* renderiza título se existir */}
      <div className="card-content">{children}</div> {/* conteúdo principal */}
      {footer && <div className="card-footer">{footer}</div>}{" "}
      {/* rodapé opcional */}
    </div>
  );
}
