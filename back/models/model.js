const { DataTypes } = require('sequelize') //объект с типами данных string, integer и тд

module.exports = (sequelize) => { //экспорт модели
    return sequelize.define('Table', { //"Table" - имя модели в sequelize, НЕ В БД!!!!
        tableText: { //поле в таблице
            type: DataTypes.STRING,
        }
    },{
        tableName: 'TableName' //ИМЯ В БД!!!
    })
}

