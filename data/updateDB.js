import mangas from './dataManga.js'
const API_URL = 'http://localhost:3000/manga'
export const initialDataManga = () => {
  Promise.all(mangas.map((manga) => {
    return fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(manga)
    })
      .catch((error) => {
        console.log('Error al cargar inicialmente un manga', error)
      })
  }))
}
