import express from 'express'
import routerManga from './routes/mangaRoutes.js'

const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Server ON, on port:', PORT)
})

app.use('/manga', routerManga)
