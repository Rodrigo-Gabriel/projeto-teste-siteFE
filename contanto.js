document.getElementById('whatsappForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Previne o envio padrão do formulário

  // Captura os dados dos campos do formulário
  const name = document.getElementById('name').value.trim();
  const lastname = document.getElementById('lastname').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

    // Concatena as informações em uma única mensagem
  const fullMessage = encodeURIComponent(
    `Meu nome : ${name} ${lastname}\nMeu E-mail : ${email}\nMeu telefone : ${phone}\n\nMensagem : ${message} `
  );

    // Define o número do WhatsApp (formato internacional)
  const whatsappNumber = '+558588942995';

    // Redireciona o usuário para o WhatsApp
  window.open(`https://wa.me/${whatsappNumber}?text=${fullMessage}`, '_blank');
});