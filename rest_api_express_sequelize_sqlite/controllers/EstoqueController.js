const Estoque = require('../models/Estoques');

class EstoqueController {
    static async listaEstoque(req, res) {

        try {
            const lista = await Estoque.findAll();
            res.status(200).json(lista);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async addMaterialEstoque(req, res) {
        const dados = req.body;
        try {
            const material = await Estoque.create(dados);
            res.status(201).json(material);
        } catch (error) {
            console.log(error)
            res.status(400).json(error);
        }
    }

    static async listaMaterialEstoque(req, res) {
        const id = req.params.id;
        try {
            const material = await Estoque.findOne({ where: { id: id } });
            return res.status(200).json(material);
        } catch (error) {
            return res.status(400).json(error);
        }
    }

    static async atualizaEstoque(req, res) {
        const id = req.params.id;
        const dados = req.body;
        try {
            await Estoque.update(dados, { where: { id: id } });
            const estoqueAtualizado = await Estoque.findOne( { where: { id: id } });
            return res.status(200).json(estoqueAtualizado)
        } catch (error) {
            return res.status(400).json(error);
        }
    }


    static async deletaEstoque(req, res) {
        const id = req.params.id;
        try {
            await Estoque.destroy({ where: { id: id } });
            return res.status(200).json(`Id ${id} foi deletado com sucesso`);
        } catch (error) {
            return res.status(200).json(error);
        }
    }
}

module.exports = EstoqueController;