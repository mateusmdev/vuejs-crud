const Client = require('../models/client.js')

module.exports = {
    async findAll(req, res) {
        try {
            const allObjects = await Client.findAll()
            const response = {
                status: 200,
                objects: allObjects
            }

            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                error: error,
                status: 500
            })
        }
    },

    async findOne(req, res) {
        try {
            const { id } = req.params
            const result = await Client.findByPk(id)

            if (result) {
                response = {
                    status: 200,
                    user: result
                }

                res.status(200).json(response)
            }

            res.status(404).json({
                message: 'Cliente não encontrado',
                status: 404,
                user: []
            })

        } catch (error) {
            return res.status(500).json({
                error: error,
                status: 500
            })
        }
    },

    async create(req, res) {
        try {
            const created = await Client.create(req.body)

            if (created) {
                const response = {
                    message: 'Cliente cadastrado!',
                    created,
                    status: 201
                }

                return res.status(201).json(response)
            }

        } catch (error) {
            return res.status(500).json({
                error: error,
                status: 500
            })
        }
    },

    async update(req, res) {
        try {
            const user = await Client.findByPk(req.body.id)
            if (user) {
                const keys = Object.keys(req.body)
                keys.forEach(columnName => {
                    if (columnName !== 'id') {
                        user[columnName] = req.body[columnName]
                    }
                })
                user.updatedAt = new Date()

                const result = await user.save()

                const response = {
                    message: 'Cliente atualizado!',
                    user: result,
                    status: 201
                }

                res.status(201).json(response)
            }

            res.status(404).json({
                message: 'Não foi possível encontrar um cliente com esse id',
                status: 404,
                user: []
            })

        } catch (error) {
            return res.status(500).json({
                error: error.message,
                status: 500
            })
        }
    },

    async delete(req, res) {
        try {
            const user = await Client.findByPk(req.body.id)
            if (user) {
                await Client.destroy( { where: {
			id: req.body.id
		} } )

                return res.status(201).json({
                    message: 'Cliente deletado!',
                    status: 201,
                })
            }

            res.status(404).json({
                message: 'Não foi possível encontrar um cliente com esse id',
                status: 404,
            })

        } catch (error) {
            return res.status(500).json({
                error: error.message,
                status: 500
            })
        }
    }
}