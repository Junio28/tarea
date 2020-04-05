const Sale = require('../models/Sale');
async function getSales(req, res) {
    try {
        const sales = await Sale.findAll({
        });
        res.json({
            data: sales
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ha ocurrido un error interno'
        });
    }
};

async function addSales(req, res) {
    try {
        const sale = await Sale.create(req.body); //dinamico
        res.status(201).send(sale);
    } catch (e) {
        res.status(500).send(e);
    }
};

async function updateSales(req, res) {
    try {
        //buscar usuario
        const sale = await Sale.findByPk(req.params.id);

        //validar si existe
        if (!sale) {
            return res.status(404).send('El producto que intenta actualizar no existe');
        }
        //actualizar usuario
        await Sale.update(req.body, {
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

async function deleteSales(req, res){
    try {

        const sale = await Sale.findByPk(req.params.id);
        if (!sale) {
            return res.status(404).send({ error: 'El producto que desea eliminar no existe' });
        }
        await Sale.destroy({
            where: {
                id: sale.id
            }
        })
        res.send({ message: 'Venta ha sido borrada satisfatoriamente' });

    } catch (e) {
        res.status(500).send();

    }
};


module.exports = {getSales,addSales,updateSales,deleteSales};
