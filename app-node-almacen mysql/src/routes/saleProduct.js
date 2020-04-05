const {Router}= require('express')
const  {getSaleProduct,addSaleProduct,updateSaleProduct,deleteSaleProduct}  = require('../controllers/saleProductController')
const router =Router()

router.get('/saleProduct', getSaleProduct);
router.post('/sales', addSaleProduct)
router.patch('/sales/:id', updateSaleProduct)
router.delete('/sales/:id', deleteSaleProduct)

module.exports = router
