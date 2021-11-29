const MoradorProprietario = require('../models/moradorproprietarioModels.js');

module.exports = {
    async index(req, res){
        const moradorproprietario = await MoradorProprietario.findAll();
        return res.json(moradorproprietario);
    }, 

    async store(req, res){
        const {
            mor_nome,
            mor_apelido,
            mor_celular,
            mor_cpf
        } = req.body;

        const moradorproprietario = await MoradorProprietario.create({
            mor_nome,
            mor_apelido,
            mor_celular,
            mor_cpf
        });

        return res.status(200).send({
            status: 1, 
            message: "Morador cadastrado com sucesso!",
            moradorproprietario
        })
    },

    async update(req, res){
        const { mor_nome } = req.body;
        const { codigo } = req.params;
        
        await MoradorProprietario.update({
            mor_nome
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Morador cadastrado com sucesso!"
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await MoradorProprietario.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Morador excluido com sucesso!"
        })
    }
}