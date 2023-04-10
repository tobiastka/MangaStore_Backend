import { Router } from 'express'
import { getMangaByIDController, getMangaController, postMangaController } from '../controllers/mangaControllers.js'

const routerManga = Router()

routerManga.post('/', postMangaController)
routerManga.get('/', getMangaController)
routerManga.get('/:id', getMangaByIDController)

export default routerManga
