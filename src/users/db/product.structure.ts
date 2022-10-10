import {Sequelize} from "sequelize" 
import { variables_products } from "./product.merch"

const db_product_conect = new Sequelize({
    dialect:"postgres",
    host:variables_products.db.host,
    username:variables_products.db.user,
    password:variables_products.db.password,
    database:variables_products.db.name
})

module.exports = db_product_conect
