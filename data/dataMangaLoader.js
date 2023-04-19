import bannerImages from './dataBannerImage.js'
import collections from './dataCollection.js'
import mangas from './dataManga.js'
const API_URL = 'http://localhost:3000'
export const initialDataManga = () => {
  Promise.all(collections.map(serie => fetch(`${API_URL}/collection`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(serie)
    })
    .catch((error) => {
      console.log('Error', error)
    })))
    .then(
      () => {
        Promise.all(mangas.map(manga => fetch(`${API_URL}/manga`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(manga)
        })
          .then(r => r.json)
          .then(r => r)
          .catch((error) => {
            console.log('Error al cargar inicialmente un manga', error)
          })
        ))
      }
    )
    .then(
      () => {
        Promise.all(bannerImages.map((bannerImage) => {
          return fetch(`${API_URL}/bannerImage`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(bannerImage)
          })
            .catch(error => console.log(error))
        }))
      }
    )
    .then(

    )
}
