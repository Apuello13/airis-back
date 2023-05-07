const saleRepository = require('../infrastucture/repositories/sale.repository');
const httpError = require('../application/utils/http-error');
const { httpStatusKey } = require('../application/utils/http-status')
const functions = require('../application/utils/functions');
const GENERAL = require('../application/utils/general');

const saleService = {
    save: (req, res) => {
        const sale = req.body;
        sale.id = functions.findLastId(saleRepository.findAll()) + GENERAL.PLUS;
        saleRepository.save(sale);
        res.send(sale);
    },
    findAll: (req, res) => res.send(saleRepository.findAll()),
    deleteById: (req, res) => {
        const saleId = req.params?.saleId;
        if(!saleId) httpError(res, httpStatusKey.NOT_FOUND)
        const sale = saleRepository.findById(saleId);
        saleRepository.deleteById(saleId);
        res.send(sale);
    }
};

module.exports = saleService;