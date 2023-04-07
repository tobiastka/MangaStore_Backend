import { Router } from 'express'

const routerManga = Router()

routerManga.get('/', (req, res) => {
  res.send('Traer manga')
})

routerManga.post('/', (req, res) => {
  res.send('Traer manga')
})

export default routerManga
