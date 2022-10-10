import {Sequelize} from "sequelize" 
import { variables } from "./config"

const db = new Sequelize({
    dialect:"postgres",
    host:variables.db.host,
    username:variables.db.user,
    password:variables.db.password,
    database:variables.db.name
})

module.exports = db
