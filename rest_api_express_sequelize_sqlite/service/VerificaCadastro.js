const Vendedor = require('../models/Vendedor')

module.exports =  async function verificaCadastro(nome, email, senha){
    
    //checa nome, email e senha
    if(!nome || !email || !senha) {
        throw new erroDados({ message: 'Nome, Email e Senha são obrigátorios.'});
    }
    
    //checa se vendedor existe      
            
    const vendedorExiste = await Vendedor.findOne({ where: { email: email}});
    
    if(vendedorExiste) {
        throw new erroDados({ message: 'Esse e-mail já está cadastrado, tente outro' });
    }
    
    //necessario transformar senha em string pra solucionar o erro 'data must be a string and salt must either be a salt string or a number of rounds'
    const senhaTratada = senha.toString();
    
    return senhaTratada;
    
}


function erroDados(mensagem) {
    this.mensagem = mensagem;
}







        

        
        
        
