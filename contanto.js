// import emailjs from "emailjs-com";

// // Inicializa o EmailJS
// emailjs.init("jOfhYAkZLcvA02jxf"); // User ID do EmailJS

// // Selecionar o formulário
// document.getElementById("contact-form").addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevenir o recarregamento da página

//   // Coleta os dados do formulário
//   const templateParams = {
//     name: document.getElementById("name").value,
//     sobrenome: document.getElementById("sobrenome"),
//     email: document.getElementById("email").value,
//     message: document.getElementById("message").value,
//     telefone: document.getElementById("telefone"),
//   };

//   // Envia o email
//   emailjs
//     .send("service_s204ajo", "template_m2xomut", templateParams)
//     .then(
//       function (response) {
//         alert("Email enviado com sucesso!");
//         console.log("Sucesso!", response.status, response.text);
//       },
//       function (error) {
//         alert("Erro ao enviar email.");
//         console.error("Erro:", error);
//       }
//     );
// });

// Aqui fiz um exemplo só com alguns parametros, mas vc pode por mais.

const enviarEmail = () => {
	// Informações que vão ser enviadas.
	const params = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		message: document.getElementById("message").value,
	};

	const serviceId = "SERVICE_ID"; // ID do serviço
	const templateId = "TEMPLATE_ID"; // ID do template do email

	// Isso é o que executa o envio. Ele recebe 3 parametros nessa ordem
	emailjs
		.send(serviceId, templateId, params)

		.then((res) => {
			document.getElementById("name").value = "";
			document.getElementById("email").value = "";
			document.getElementById("message").value = "";
			console.log(res);
			alert("A mensagem foi enviada");
		}) // Isso aqui é pra zerar os campos ao enviar

		.catch((err) => console.log(err)); // Se der ruim, ele mostra o erro no console
};
