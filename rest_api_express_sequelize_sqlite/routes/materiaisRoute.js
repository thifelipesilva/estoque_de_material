const { Router } = require("express");
const MateriaisController = require("../controllers/MateriaisController");

const router = Router();

router.get('/materiais', MateriaisController.listaMateriais)
router.get('/materiais/:id', MateriaisController.listaMaterialPorId)
router.post('/materiais', MateriaisController.addMaterial)
router.put('/materiais/:id', MateriaisController.atualizaMaterial);
router.delete('/materiais/:id', MateriaisController.deletaMaterial);

module.exports = router;