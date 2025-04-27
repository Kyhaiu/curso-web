import React from "react";

/**
 * Button.jsx
 * Componente reutilizável de botão, com estilos padrão e possibilidade de customização via className
 * Props:
 * - children: conteúdo interno do botão (texto, ícones, etc.)
 * - onClick: função chamada ao clicar no botão
 * - type: tipo do botão ("button", "submit", etc.)
 * - className: classes CSS adicionais para customização
 */
export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}) {
  return (
    <button
      type={type} // define o tipo do botão
      onClick={onClick} // handler para clique
      className={`custom-button ${className}`} // classes CSS padrão + extras
    >
      {/* conteúdo renderizado dentro do botão */}
      {children}
    </button>
  );
}
