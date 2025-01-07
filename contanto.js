import emailjs from "emailjs-com";

// Inicializa o EmailJS
emailjs.init("jOfhYAkZLcvA02jxf"); // User ID do EmailJS

// Selecionar o formulário
document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevenir o recarregamento da página

  // Coleta os dados do formulário
  const templateParams = {
    name: document.getElementById("name").value,
    sobrenome: document.getElementById("sobrenome"),
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
    telefone: document.getElementById("telefone"),
  };

  // Envia o email
  emailjs
    .send("service_s204ajo", "template_m2xomut", templateParams)
    .then(
      function (response) {
        alert("Email enviado com sucesso!");
        console.log("Sucesso!", response.status, response.text);
      },
      function (error) {
        alert("Erro ao enviar email.");
        console.error("Erro:", error);
      }
    );
});
