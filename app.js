import express from 'express'
import routerManga from './routes/mangaRoutes.js'
import dotenv from 'dotenv'
import { sequelizeConnection } from './db.js'
// ----- MODELOS ------>
import './models/mangaModel.js'
import { initialDataManga } from './data/updateDB.js'
import bodyParser from 'body-parser'

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
app.use('/manga', routerManga)
