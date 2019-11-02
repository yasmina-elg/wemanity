import models from '../../models'
import sequelize from 'sequelize'

export const EntryController = {
    getAll: async (req, res) => {
        const entries = await models.entry.findAll({})
        res.status(200).json(entries)
    },

    create: async (req, res) => {

        const { firstname, lastname, phoneNumber } = req.body

        if (!firstname || !lastname || !phoneNumber) {
            return res.status(400).json(
                { 'error': 'missing parameters violating not null constraints' }
            )
        }

        try {

            const entryAlreadyExists = await models.entry.findOne({
                where: {
                    firstname: firstname,
                    lastname: lastname,
                    phoneNumber: phoneNumber
                }
            })

            if(!entryAlreadyExists){
                const entryToCreate = await models.entry.create({
                    firstname: firstname,
                    lastname: lastname,
                    phoneNumber: phoneNumber
                })

                return res.status(201).json({ 'entry created': entryToCreate })
            }else{
                res.status(409).json({ 'error': 'entry already exists' })
            }
            
        } catch (error) {
            res.status(500).json({ 'error': 'unable to create entry' })
            console.log(error)
        }
    },

    update: async (req, res) => {
        try {
            const entryId = req.params.id
            const { firstname, lastname, phoneNumber } = req.body
            console.log('§§§§§§§§§!!!!!!',firstname, lastname, phoneNumber,'§§§§§§§§§!!!!!!')
            await models.entry.update(
                {
                    firstname: firstname,
                    lastname: lastname,
                    phoneNumber: phoneNumber
                },
                {
                    where: {
                        id: entryId
                    }
                }
            )

            const entryUpdated = await models.entry.findOne({
                where: { id: entryId }
            })

            return res.status(201).json({ 'entry updated': entryUpdated })
        } catch (error) {
            res.status(500).json({ 'error': 'unable to update entry' })
            console.log(error)
        }
    }
}