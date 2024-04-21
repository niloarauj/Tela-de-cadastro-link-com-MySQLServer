const bancodedados = require('./site/bancodedados')

const post = bancodedados.sequelize.define('cadastrados', {
    nome: {
        type: bancodedados.Sequelize.STRING
    },
    email: {
        type: bancodedados.Sequelize.STRING
    },
    senha: {
        type: bancodedados.Sequelize.STRING
    }
})

module.exports = post
//post.sync({force: true})

//Para criar algo no Banco de Dados:
//Post.sync({force: true})
