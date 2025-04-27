import Section from "../components/section";
import Input from "../components/input";
import Textarea from "../components/textarea";
import Button from "../components/button";

/**
 * Contact.jsx
 * Página de contato com formulário para envio de mensagens via Formspree.
 */
export default function Contact() {
  return (
    <div className="page">
      <Section title="Contato">
        {/* Formulário de contato */}
        <form
          action="https://formspree.io/f/your-form-id"
          method="POST"
          className="contact-form"
        >
          <Input
            label="Digite seu nome completo"
            name="name"
            type="text"
            required
          />
          <Input label="Seu e-mail" name="email" type="email" required />
          <Textarea label="Escreva sua mensagem" name="message" required />
          <div className="form-actions">
            <Button type="submit">Enviar Mensagem</Button>{" "}
            {/* botão de envio */}
          </div>
        </form>
      </Section>
    </div>
  );
}
