import React from "react";

/**
 * Textarea.jsx
 * Área de texto para mensagens longas.
 * Props:
 * - label: texto do rótulo acima da textarea (opcional)
 * - all other props são repassados para o elemento <textarea>
 */
export default function Textarea({ label, ...props }) {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}{" "}
      {/* rótulo se fornecido */}
      <textarea className="form-textarea" {...props} />{" "}
      {/* textarea com props */}
    </div>
  );
}
