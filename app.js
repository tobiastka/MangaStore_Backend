import express from 'express'
import routerManga from './routes/mangaRoutes.js'
import dotenv from 'dotenv'
import { sequelizeConnection } from './db.js'
// ----- MODELOS ------>
import Manga from './models/mangaModel.js'
import Colletion from './models/collectionModel.js'
import './models/bannerImageModel.js'

import { initialDataManga } from './data/dataMangaLoader.js'
import bodyParser from 'body-parser'
import routerCollection from './routes/collectionRoutes.js'
import routerBannerImage from './routes/bannerImageRoutes.js'

// ----- RELACIONES ---->
Colletion.hasMany(Manga)
Manga.belongsTo(Colletion)

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000
sequelizeConnection.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.')

    sequelizeConnection.sync({ force: true })
      .then(() => {
        console.log('Tablas creadas correctamente')
        app.listen(PORT, () => {
          console.log('Server ON, on port:', PORT)
          initialDataManga()
        })
      })
      .catch((error) => {
        console.log('Error al crear las tablas:', error)
      })
  })
  .catch((error) => {
    console.log('Error al conectar con la base de datos:', error)
  })

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  next()
})
app.use('/manga', routerManga)
app.use('/collection', routerCollection)
app.use('/bannerImage', routerBannerImage)
