const Vendedor = require('../models/Vendedor');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


class VendedorController {

    static async listaVendedores(req, res) {
        try {
            const vendedores = await Vendedor.findAll();
            res.status(200).json(vendedores)
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async loginVendedor(req, res) {

        const { email, senha } = req.body;

        const senhaTratada = senha.toString();
        const vendedorValido = await Vendedor.findOne({ where: { email: email } });

        if(!vendedorValido) {
            return res.send('Vendedor não está cadastrado' );
        }

        const senhaValido = await bcrypt.compare(senhaTratada, vendedorValido.senha);

        if(!senhaValido) {
            return res.send('senha invalida');
        }
        
        return res.status(201).json({ 
            nome: vendedorValido.nome,
            email: vendedorValido.email
        })

    }
    
    static async cadastraVendedor (req, res) {
        const { nome, email, senha, materialVendidoId, dataVenda } = req.body;

       const senhaTratada = senha.toString();   

        //cria senha

        const salt = await bcrypt.genSalt(10); 
        const senhaHash = await bcrypt.hash(senhaTratada, salt);

        //vendedor 
        const dadosVendedor = { nome, email, senha: senhaHash, materialVendidoId, dataVenda };
        
        try {
            const vendedor = await Vendedor.create(dadosVendedor);
            return res.status(201).json(vendedor);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static async listaUmVendedor(req, res) {
        const id = req.params.id;
        try {
            const vendedor = await Vendedor.findOne({ where: { id: id } });
            return res.status(200).json(vendedor);            
        } catch (error) {
            return res.status(200).json(error);
        }
    }

    static async atualizaVendedor(req, res) {
        const id = req.params.id;
        const dados = req.body;
        try {
            await Vendedor.update(dados, { where: { id } });
            const vendedorAtualizado = await Vendedor.findOne({ where: { id } })
            return res.status(200).json(vendedorAtualizado)
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static async deletaVendedor(req, res) {
        const id = req.params.id;
        try {
            await Vendedor.destroy({ where: { id } });
            return res.status(200).json(`Id ${id} deletado com sucesso`);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
}

module.exports = VendedorController;