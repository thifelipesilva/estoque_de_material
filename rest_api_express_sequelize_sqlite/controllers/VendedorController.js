const Vendedor = require('../models/Vendedor');


class VendedorController {

    static async listaVendedores(req, res) {
        try {
            const vendedores = await Vendedor.findAll();
            res.status(200).json(vendedores)
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async cadastroVendedor (req, res) {
        const dados = req.body;
        try {
            const vendedor = await Vendedor.create(dados);
            res.status(201).json(vendedor);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async listaUmVendedor(req, res) {
        const id = req.params.id;
        try {
            const vendedor = await Vendedor.findOne({ where: { id: id } });
            res.status(200).json(vendedor);            
        } catch (error) {
            res.status(200).json(error);
        }
    }

    static async atualizaVendedor(req, res) {
        const id = req.params.id;
        const dados = req.body;
        try {
            await Vendedor.update(dados, { where: { id } });
            const vendedorAtualizado = await Vendedor.findOne({ where: { id } })
            res.status(200).json(vendedorAtualizado)
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async deletaVendedor(req, res) {
        const id = req.params.id;
        try {
            await Vendedor.destroy({ where: { id } });
            res.status(200).json(`Id ${id} deletado com sucesso`);
        } catch (error) {
            res.status(400).json(error);
        }
    }
}

module.exports = VendedorController;