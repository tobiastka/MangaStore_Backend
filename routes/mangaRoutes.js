import { Router } from 'express'
import { postMangaController } from '../controllers/mangaControllers.js'

const routerManga = Router()

routerManga.get('/', (req, res) => {
  res.send('Traer manga')
})

routerManga.post('/', postMangaController)

export default routerManga
