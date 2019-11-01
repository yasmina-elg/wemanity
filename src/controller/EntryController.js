import models from '../../models'
import sequelize from 'sequelize'

export const EntryController = {
    getAll: async (req,res) => {
        const entries = await models.entry.findAll({})
        res.status(200).json(entries)
    }
}