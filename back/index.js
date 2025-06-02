const express = require('express') //для создания сервера
const cors = require('cors') //херня для доступа если фронт на другом порте
const { Sequelize } = require('sequelize') //для работы с бд

const app = express() //создание приложения
app.use(cors()) //подключение корса чтоб заработал доступ

const sequelize = new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
}) //подключение бд

const StakanVodi = require('./models/model.js') //импорт модели
const Model = StakanVodi(sequelize)

app.get('/api/adress', async(req, res) => {
    try{
        const model = await Model.findOne() //ищет первую запись в табличке
        res.json(model)
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}) //создание гет запроса

const start = async () => {
    try{
        await sequelize.sync() //синхрон с базой, создает таблицы если их нет
        app.listen(5000, () => {}) //5000 - порт сервера
    } catch(err) {
        console.error(err)
    }
} //запуск сервера

start()