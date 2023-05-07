const router = require('express').Router();
const saleService = require('../../services/sale.service');
const authorization = require('../../application/middleware/authorization');

router.post('/', authorization.validateToken, saleService.save);
router.get('/', authorization.validateToken, saleService.findAll);
router.delete('/:saleId', authorization.validateToken, saleService.deleteById);

module.exports = router;