const { Router } = require("express");
const EstoqueController = require("../controllers/EstoqueController");

const router = Router();

router.get('/estoque', EstoqueController.listaEstoque);
router.get('/estoque/:id', EstoqueController.listaMaterialEstoque);
router.post('/estoque', EstoqueController.addMaterialEstoque);
router.put('/estoque/:id', EstoqueController.atualizaEstoque);
router.delete('/estoque/:id', EstoqueController.deletaEstoque);


module.exports = router;