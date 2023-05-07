let sales = require('../../domain/sale');

const saleRepository = {
    save: (sale) => {
        sales.push(sale);
        return sale;
    },
    findAll: () => sales,
    findById: (saleId) => sales.find(sale => sale.id === saleId),
    deleteById: (saleId) => {
        const filterSales = sales.filter(sale => sale.id !== saleId);
        sales = filterSales;
    }
}

module.exports = saleRepository;