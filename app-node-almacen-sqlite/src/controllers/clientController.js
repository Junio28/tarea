const Client = require('../models/Client');
async function getClients(req, res) {
    try {
        const clients = await Client.findAll({
        });
        res.json({
            data: clients
        })
    } catch (error) {
        console.log(error);
        res.json({
            data: {},
            message: 'Ah ocurrido un error interno'
        });
    }
};

async function addClients(req, res) {
    try {
        const client = await Client.create(req.body); //dinamico
        res.status(201).send(client);
    } catch (e) {
        res.status(500).send(e);
    }
};


//Actualizar usuarios
async function updateClients(req, res) {
    try {
        //buacar usuario
        const client = await Client.findByPk(req.params.id);

        //validar si existe
        if (!client) {
            return res.status(404).send('El usuario que intenta altualizar no existe');
        }
        //actualizar usuario
        await Client.update(req.body, {
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


async function deleteClients(req, res){
    try {

        const client = await Client.findByPk(req.params.id);
        if (!client) {
            return res.status(404).send({ error: 'El usuario que desea eliminar no existe' });
        }
        await Client.destroy({
            where: {
                id: client.id
            }
        })
        res.send({ message: 'Usuario Borrado' });

    } catch (e) {
        res.status(500).send();

    }
};


module.exports = {getClients,addClients,updateClients,deleteClients};
