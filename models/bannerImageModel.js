import { sequelizeConnection } from '../db.js'
import { DataTypes } from 'sequelize'

const BannerImage = sequelizeConnection.define('bannerImage',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    type: {
      type: DataTypes.ENUM({
        values: ['best sellers', 'news', 'info']
      }),
      allowNull: false
    },
    imageURL: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: false
  }
)

export default BannerImage
