import Manga from '../models/mangaModel.js'

export const postMangaController = async (req, res) => {
  try {
    const { nombre, autor, volumen, cantidadVolumenes, formato, imagen, resumenHistoria, genero } = req.body
    const newManga = await Manga.create({ nombre, autor, volumen, cantidadVolumenes, formato, imagen, genero, resumenHistoria })
    res.status(201).json({ message: 'Nuevo manga agregado correctamente', data: newManga })
  } catch (error) {
    // console.log(error)
    res.status(500).json({ message: 'Error al crear un nuevo manga', error })
  }
}
