const http = require('http');
const express = require('express')
const app = express()
const post = require('./post')
const bodyParser = require('body-parser')
const serverHttp = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', express.static('site'))


serverHttp.listen(1000, function(){
    console.log("Servidor rodando em http://localhost:1000")
})

function enviarFormulario() {
    var formulario = document.getElementById('form');
    var formData = new FormData(formulario);
  
    // Envie uma requisição AJAX
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/processar-formulario', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(xhr.responseText); // Exiba a resposta do servidor
      }
    };
    xhr.send(formData);
  
    // Ou você pode simplesmente permitir que o formulário seja submetido normalmente
    // formulario.submit();
  }



  
app.post('/', function(req, res){ 
    post.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha
        }).then(() => {
            res.redirect('/outra-rota');
            })
            //.catch((err) => {
        ///    console.log(err)
        ///    res.status(500).send('Erro interno')
        ///})
})


//const sequelize = new Sequelize('cadastrados', 'root', 'nilo123', {
//    host: 'localhost',
//    dialect: 'mysql'
//})
//
//module.exports = {
//    Sequelize: Sequelize,
//    sequelize: sequelize
//}
//
///app.use(express.urlencoded({extended:false}))
///app.use(express.json())
///
///app.post('/add', function(req, res){
///Post.create({
///    titulo: req.body.titulo,
///    conteudo: req.body.conteudo
///}).then(function(){
///    res.redirect('/')
///}).catch(function(erro){
///    res.send("ocorreu um erro na criação do post: "+ erro)
///})
///})
///
///
///const Cadastrar = db.sequelize.define('cadastrados', {
///    nome: {
///        type: db.Sequelize.STRING
///    },
///    email: {
///        type: db.Sequelize.STRING
///    },
///    senha: {
///        type: db.Sequelize.TEXT
///    }
///})
///
///form.addEventListener('submit', event => {
///    event.preventDefault();
///
///   const nome = document.querySelector('#nome');
///   const Nome = nome.value
///   const email = document.querySelector('#email');
///   const Email = email.value
///   const senha = document.querySelector('#senha');
///   const Senha = senha.value
///   Cadastrar.create({
///    nome: Nome,
///    email: Email,
///    senha: Senha
///})
///})
///
///
///
///module.exports = Cadastrar
///Cadastrar.sync({force: true})
///
///
