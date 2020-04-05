const TypeProduct = require('../models/TypeProduct');
async function getTypeProducts(req, res) {
    try {
        const typeProducts = await TypeProduct.findAll({
        });
        res.json({
            data: typeProducts
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

async function addTypeProducts(req, res) {
    try {
        const typeproduct = await TypeProduct.create(req.body); //dinamico
        res.status(201).send(typeproduct);
    } catch (e) {
        res.status(500).send(e);
    }
};

async function updateTypeProducts(req, res) {
    try {
        //buscar usuario
        const typeproduct = await TypeProduct.findByPk(req.params.id);

        //validar si existe
        if (!typeproduct) {
            return res.status(404).send('El producto que intenta altualizar no existe');
        }
        //actualizar usuario
        await TypeProduct.update(req.body, {
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

async function deleteTypeProducts(req, res){
    try {

        const typeproduct = await TypeProduct.findByPk(req.params.id);
        if (!typeproduct) {
            return res.status(404).send({ error: 'El producto que desea eliminar no existe' });
        }
        await TypeProduct.destroy({
            where: {
                id: typeproduct.id
            }
        })
        res.send({ message: 'Usuario Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};



module.exports = {getTypeProducts,addTypeProducts,updateTypeProducts,deleteTypeProducts};
