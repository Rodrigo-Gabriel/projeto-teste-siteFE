 // Inicializa o serviço do EmailJS com a chave pública
 emailjs.init("YOUR_USER_ID"); // Substitua com sua User ID do EmailJS

 document.getElementById('form-contato').addEventListener('submit', function(event) {
   event.preventDefault();  // Impede o envio padrão do formulário

   // Enviar os dados do formulário para o EmailJS
   emailjs.sendForm('service_s204ajo', 'YOUR_TEMPLATE_ID', this)
     .then(function(response) {
         alert('Mensagem enviada com sucesso!');
     }, function(error) {
         alert('Erro ao enviar a mensagem: ' + error);
     });
 });