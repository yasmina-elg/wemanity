import models from '../../models'
import sequelize from 'sequelize'

export const EntryController = {
    getAll: async (req,res) => {
        const entries = await models.entry.findAll({})
        res.status(200).json(entries)
    },

   

    update: async (req,res) => {
        try {
            const entryId = req.params.id
            const {firstname, lastname, phoneNumber} = req.body
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