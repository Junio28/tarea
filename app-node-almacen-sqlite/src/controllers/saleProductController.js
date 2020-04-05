const SaleProduct = require('../models/SaleProduct');
async function getSaleProduct(req, res) {
    try {
        const saleProduct = await SaleProduct.findAll({
        });
        res.json({
            data: saleProduct
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

async function addSaleProduct(req, res) {
    try {
        const saleProduct = await SaleProduct.create(req.body); //dinamico
        res.status(201).send(saleProduct);
    } catch (e) {
        res.status(500).send(e);
    }
};

async function updateSaleProduct(req, res) {
    try {
        //buscar usuario
        const saleProduct = await SaleProduct.findByPk(req.params.id);

        //validar si existe
        if (!saleProduct) {
            return res.status(404).send('El producto que intenta actualizar no existe');
        }
        //actualizar usuario
        await SaleProduct.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //respuesta
        res.status(200).send();

        //capturamos errores
    } catch (e) {
        res.status(500).send('error interno, intente mas tarde');
    }
};

async function deleteSaleProduct(req, res){
    try {

        const saleProduct = await SaleProduct.findByPk(req.params.id);
        if (!saleProduct) {
            return res.status(404).send({ error: 'El producto que desea eliminar no existe' });
        }
        await SaleProduct.destroy({
            where: {
                id: saleProduct.id
            }
        })
        res.send({ message: 'Venta ha sido borrada satisfatoriamente' });

    } catch (e) {
        res.status(500).send();

    }
};

module.exports = {getSaleProduct,addSaleProduct,updateSaleProduct,deleteSaleProduct};
