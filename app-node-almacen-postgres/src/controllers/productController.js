const Product = require('../models/Product');
async function getProducts(req, res) {
    try {
        const products = await Product.findAll({
        });
        res.json({
            data: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

async function addProducts(req, res) {
    try {
        const product = await Product.create(req.body); //dinamico
        res.status(201).send(product);
    } catch (e) {
        res.status(500).send(e);
    }
};

async function updateProducts(req, res) {
    try {
        //buscar usuario
        const product = await Product.findByPk(req.params.id);

        //validar si existe
        if (!product) {
            return res.status(404).send('El producto que intenta altualizar no existe');
        }
        //actualizar usuario
        await Product.update(req.body, {
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

async function deleteProducts(req, res){
    try {

        const product = await Product.findByPk(req.params.id);
        if (!product) {
            return res.status(404).send({ error: 'El producto que desea eliminar no existe' });
        }
        await Product.destroy({
            where: {
                id: product.id
            }
        })
        res.send({ message: 'Usuario Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};

module.exports = {getProducts,addProducts,updateProducts,deleteProducts};
