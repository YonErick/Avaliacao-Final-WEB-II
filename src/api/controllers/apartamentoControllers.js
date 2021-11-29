const Apartamento = require('../models/apartamentoModels.js');

module.exports = {
    async index(req, res){
        const apartamento = await Apartamento.findAll();
        return res.json(apartamento);
    }, 

    async store(req, res){
        const {
            apt_edificio,
            apt_numero,
            apt_andar,
            apt_quartos,
            mor_codigo
        } = req.body;

        const apartamento = await Apartamento.create({
            apt_edificio,
            apt_numero,
            apt_andar,
            apt_quartos,
            mor_codigo
        });

        return res.status(200).send({
            status: 1, 
            message: "Apartamento cadastrado com sucesso!",
            apartamento
        })
    },

    async update(req, res){
        const { apt_edificio, apt_numero, apt_andar, apt_quartos, mor_codigo } = req.body;
        const { codigo } = req.params;
        
        await Apartamento.update({
            apt_edificio, apt_numero, apt_andar, apt_quartos, mor_codigo
        }, { where : {
            id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Apartamento cadastrado com sucesso!"
        })
    },

    async delete(req, res){
        const { codigo } = req.params;
        await Apartamento.destroy({
            where: {
                id: codigo
            }
        });

        return res.status(200).send({
            status: 1,
            message: "Apartamento excluido com sucesso!"
        })
    }
}