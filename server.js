// Importando o arquivo app.js
import app from "./src/app.js"

// Setando para uso da porta do arquivo ENV ou 3000
const port = process.env.PORT || 3000

// Setando nosso arquivo APP para ser ouvido pelo servidor
app.listen(port,()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

// ====================================================================== ANTES
// //Criando uma constante que vamos usar o módulo nativo HTTP
// const http = require("http")
// // Definindo a porta que nosso servidor vai escutar
// const port = 3000

// // Vamos criar aqui as nossas Rotas
// const rotas = {
//     '/' : 'Curso de node',
//     '/livros' : 'Entrei na pagina de livros',
//     '/autores': 'Entrei na pagina de Autores',
//     '/editora': 'Entrei na pagina de editoras',
//     '/sobre':'Info sobre o projeto'
// }

// //Criando o Servidor e definindo como ele vai funcionar, com as requisições e as respostas assim como as funcoes que vao acontecer nele
// const server = http.createServer((req, res) => {
//     //Definindo o Cabeçalho como texto
//     res.writeHead(200,{'Content-type':'text/plain'})
//     //Definindo a resposta que será exibida
//     // res.end('Curso de Node')

//     //Agora vamos trocar a resposta para exibir exatamento o que foi criado na nossa rota
//     // Dependendo do que vier na url ele vai retornar algo da nossa constante
//     res.end(rotas[req.url])
// })

// //Quando nosso servidor for executado ele irá mostrar a seguinte mensagem
// server.listen(port,()=>{
//     console.log(`Servidor escutando em http://localhost:${port}`)
// })