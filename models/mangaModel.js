import { sequelizeConnection } from '../db.js'
import { DataTypes } from 'sequelize'

const Manga = sequelizeConnection.define('manga',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    volumen: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cantidadVolumenes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    formato: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    resumenHistoria: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }
)

export default Manga
