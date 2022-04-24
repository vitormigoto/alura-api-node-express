// Importando o Express
import express from "express";

// Criando uma instancia do express para poder utilizar
const app = express();

//Setando a biblioteca para reconhecer a entrada de requisição em Json
app.use(express.json());

// Para vermos no nosso projeto inicial alguns dados de roda vamos criar uma constante de livros
const livros = [
    {id: 1, "titulo": "Senhor dos aneis"},
    {id: 2, "titulo": "O Hobbit"}
]

//Criando a rota GET base
app.get('/', (req,res) => {
    //Enviando uma resposta 200 com o texto Curso de Node
    res.status(200).send('Curso de Node')
})

app.get('/livros', (req,res) =>{
    //Enviando uma resposta 200 com o valor da constante livros
    res.status(200).json(livros)
})

// Criando a rota de busca de um livro especifico pelo parametro :id
app.get('/livros/:id',(req,res)=>{
    //Buscando a partir da id passada no parametro da requisicao
    let index = buscaLivro(req.params.id)
    //Retornando a array completa do ID especificado. Por padrão o status é o 200
    res.json(livros[index]) 
})

app.post('/livros',(req,res)=>{
    //Adicionando na array livros o corpo que for enviado na rota
    livros.push(req.body);
    //Enviando status e mensagem de sucesso no cadastro 
    res.status(201).send('Livro Cadastrado com sucesso.')
})

// Criando a rota de atualização passando id através do :id
app.put('/livros/:id',(req,res)=>{
    //Buscando a partir da id passada no parametro da requisicao
    let index = buscaLivro(req.params.id)
    //Substituindo o titulo da array pelo que veio no corpo da requisicao
    livros[index].titulo = req.body.titulo
    //Retornando a array completa na resposta. Por padrão o status é o 200
    res.json(livros) 
})

//Criando uma função para buscar o item a partir de uma id
function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

// Criando a rota de exclusão passando id através do :id
app.delete('/livros/:id',(req,res)=>{
    //Com a atribuição via desestruturação do javascript podemos fazer o seguinte para recuperar o id
    let {id} = req.params
    //Buscando a partir da id passada no parametro da requisicao
    let index = buscaLivro(id)
    //Excluindo o livro atraves do metodo splice. setando o inicio da exclusão e quantos itens vamos excluir
    livros.splice(index,1)
    //Retornando a mensagem de exclusão realizada com sucesso
    res.send(`Livro ${id} removido com sucesso!`) 
})


//Exportando o arquivo para fazer uso dele no server
export default app