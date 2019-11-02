const Models = require('./models/index')
const Sequelize = require('sequelize')

const connection = new Sequelize({'database':'phonebook', 'username':'postgres', 'password':'root', 'dialect':'postgres'})
connection.sync({ force: true}).then(() => {
    Models.entry.bulkCreate([
        {firstname: 'Yasmina', lastname: 'El Ghouate', phoneNumber: '+32 02 7777777'},
        {firstname: 'Pierre', lastname: 'Paul', phoneNumber: '+32 02 7777777'},
        {firstname: 'Jacques', lastname: 'Henry', phoneNumber: '+32 02 7777777'}
    ])
})