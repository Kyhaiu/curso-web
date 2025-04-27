import React from "react";

/**
 * Input.jsx
 * Campo de formulário estilizado.
 * Props:
 * - label: texto do rótulo acima do input (opcional)
 * - all other props são repassados para o elemento <input>
 */
export default function Input({ label, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}{" "}
      {/* rótulo se fornecido */}
      <input className="form-input" {...props} /> {/* input com props */}
    </div>
  );
}
