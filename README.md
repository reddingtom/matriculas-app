# matriculas-app

App para conclusão da atividade de: DESENVOLVIMENTO BACK-END

Enunciado:

Matrículas de aluno para cursos on-line
O desenvolvimento de aplicações web modernas exige a integração entre um frontend eficiente, com boa experiência de usuário (UX), e um back-end estruturado, seguro e escalável. O trabalho propõe a resolução de uma situação-problema, incentivando o pensamento crítico, a organização de um fluxo de dados entre cliente e servidor e o uso de boas práticas de programação.

Imagine que uma empresa de serviços educacionais está lançando uma plataforma para alunos realizarem matrículas em cursos on-line. O sistema deve permitir que os usuários vejam uma lista de cursos disponíveis, selecionem um deles e realizem a matrícula informando seus dados pessoais. Para isso, será necessário criar uma interface responsiva e acessível, além de um servidor que receba e armazene essas informações.

Atualmente, a empresa já tem uma equipe de designers, mas precisa que os desenvolvedores construam um protótipo funcional que una uma boa experiência do usuário à operação real de requisições, com armazenamento em um banco de dados (simulado). O desafio está em garantir a qualidade da interface e a robustez do back-end, mesmo sem a integração real com um banco no momento.

Crie uma aplicação web que ofereça uma experiência fluida e interativa ao usuário para a matrícula em cursos on-line, garantindo que os dados informados sejam enviados corretamente a uma API construída com boas práticas e segurança.

 

Procedimentos para elaboração do TD

Criação do Frontend com Vue.js:
Criar um componente principal chamado FormularioMatricula.vue.
Incluir campos para nome completo, e-mail e curso selecionado.
Utilizar princípios de UX antecipada: mensagens de erro claras, validações imediatas, botões com feedback visual.
Exibir a lista de cursos a partir de um array local ou uma chamada à API.
Criação da API com Node.js, Express e TypeScript:
Criar um projeto Node com TypeScript e Express.
Criar uma rota GET/cursos que retorna uma lista de cursos.
Criar uma rota POST/matrícula que recebe os dados do aluno.
Validar os dados recebidos usando TypeScript (tipagem via interface).
Responder com os códigos HTTP adequados: 201 Created, 400 Bad Request etc.
Integração Vue.js + API:
Realizar uma requisição GET no carregamento da página para exibir os cursos disponíveis.
Fazer uma requisição POST ao submeter o formulário com os dados preenchidos.
Exibir mensagens de sucesso ou erro com base na resposta da API.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

App for completing the activity: BACK-END DEVELOPMENT

Statement:

Student Enrollment for Online Courses
The development of modern web applications requires the integration of an efficient frontend, with a good user experience (UX), and a well-structured, secure, and scalable back-end. The assignment proposes solving a problem situation, encouraging critical thinking, the organization of a data flow between client and server, and the use of programming best practices.

Imagine that an educational services company is launching a platform for students to enroll in online courses. The system must allow users to view a list of available courses, select one, and complete the enrollment by providing their personal data. To achieve this, it will be necessary to create a responsive and accessible interface, as well as a server to receive and store this information.

Currently, the company already has a design team, but it needs developers to build a functional prototype that combines good user experience with real request handling and simulated database storage. The challenge lies in ensuring the quality of the interface and the robustness of the back-end, even without real database integration at this stage.

Create a web application that provides a smooth and interactive user experience for online course enrollment, ensuring that the submitted data is correctly sent to an API built with best practices and security.

Procedures for preparing the assignment

Frontend creation with Vue.js:

Create a main component called FormularioMatricula.vue.

Include fields for full name, email, and selected course.

Apply early UX principles: clear error messages, immediate validations, buttons with visual feedback.

Display the course list from a local array or an API call.

API creation with Node.js, Express, and TypeScript:

Create a Node project with TypeScript and Express.

Create a GET /courses route that returns a list of courses.

Create a POST /enrollment route that receives student data.

Validate the received data using TypeScript (typing via interface).

Respond with the appropriate HTTP status codes: 201 Created, 400 Bad Request, etc.

Vue.js + API integration:

Perform a GET request when the page loads to display the available courses.

Perform a POST request when submitting the form with the filled-in data.

Display success or error messages based on the API response.
