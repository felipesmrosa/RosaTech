import React, { useState } from "react";
import { Helmet } from "react-helmet";

export const FormularioContato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappLink = `https://api.whatsapp.com/send?phone=+5547991424212&text=${encodeURIComponent(
      `Nome: ${formData.name}\nWhatsapp: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="formulario">
      <Helmet>
        <title>Contato | RosaTech</title>
      </Helmet>
      <div className="formulario__container">
        <h2>Entre em Contato</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label>
            email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label>
            Assunto:
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <label>
            Mensagem:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              autoComplete="off"
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};
