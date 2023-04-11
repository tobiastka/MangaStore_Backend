import { Router } from 'express'
import { getMangaByIDController, getMangaController, postMangaController } from '../controllers/mangaControllers.js'

const routerManga = Router()

routerManga.post('/', postMangaController)

/*
{"nombre":"Tokyo Ghoul",
"volumen":1,
"imagen":"https://www.ivrea.com.ar/tokyoghoul/tokyoghoul01.jpg"}
*/
routerManga.get('/', getMangaController)
routerManga.get('/:id', getMangaByIDController)

export default routerManga
