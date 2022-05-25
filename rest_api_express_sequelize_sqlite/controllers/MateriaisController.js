const Materiais = require('../models/Materiais');


class MateriaisController {

    static async listaMateriais(req, res) {
        try {
            const materiais = await Materiais.findAll();  
            res.status(200).json(materiais);
        } catch (error) {
            res.status(400).json(error);
        }
        
    }

    static async addMaterial(req, res) {
        const dados = req.body;
        try {
            const material = await Materiais.create(dados);
            res.status(201).json(material);
        } catch (error) {
            res.status(401).json(error);
        }
    }

    static async listaMaterialPorId(req, res) {
        const id = req.params.id;
        try {
            const material = await Materiais.findOne({where: {
                id: id
            }});
            res.status(200).json(material);
        } catch (error) {
            res.status(400).json(error)
        }
    }

    static async atualizaMaterial(req, res) {
        const id = req.params.id;
        const dados = req.body;
        try {
            await Materiais.update(dados, {
                where: {
                    id: id
                }
            });
            const materialAtualizado = await Materiais.findOne({ where: { id: id } })
            res.status(200).json(materialAtualizado);
        } catch (error) {
            res.status(400).json(error);
        }
    }

    static async deletaMaterial(req, res) {
        const id = req.params.id;
        try {
            await Materiais.destroy({ where: { id: id } });
            res.status(200).json(`Id ${id} deletado com sucesso`);
        } catch (error) {
            res.status(400).json(error);
        }
    }



}

module.exports = MateriaisController;

