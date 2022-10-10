require("dotenv").config()

export const variables_products={
    port:process.env.PORT||3002,
    nodeEnv:process.env.NODE_ENV||"development",
    db:{
        host:process.env.DB_HOST||"localhost",
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        name:process.env.DB_NAME2,
        port:process.env.DB_PORT
    }
}