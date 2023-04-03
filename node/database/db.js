import { Sequelize } from "sequelize"

const db = new Sequelize('notely', 'root', '',{
    host:'localhost',
    dialect:"mysql"
})

export default db
