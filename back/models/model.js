const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    return sequelize.define('Table', {
        tableText: {
            type: DataTypes.STRING,
        }
    },{
        tableName: 'TableName'
    })
}

