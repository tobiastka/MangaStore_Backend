import { sequelizeConnection } from '../db.js'
import { DataTypes } from 'sequelize'

const Collection = sequelizeConnection.define('collection',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autor: {
      type: DataTypes.STRING,
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
    resumenHistoria: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    genero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imagenBanner: {
      type: DataTypes.STRING,
      allowNull: false
    }

  }

)

export default Collection
