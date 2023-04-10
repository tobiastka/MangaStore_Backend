import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()
const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS, DB_DIALECT } = process.env
export const sequelizeConnection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  PORT: DB_PORT,
  logging: false
})
