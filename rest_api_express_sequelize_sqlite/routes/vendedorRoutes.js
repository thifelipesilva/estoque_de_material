const { Router } = require("express");
const VendedorController = require("../controllers/VendedorController");

const router = Router();

router.get('/vendedor', VendedorController.listaVendedores);
router.get('/vendedor/:id', VendedorController.listaUmVendedor);
router.post('/vendedor', VendedorController.cadastroVendedor);
router.put('/vendedor/:id', VendedorController.atualizaVendedor);
router.delete('/vendedor/:id', VendedorController.deletaVendedor);



module.exports = router;
