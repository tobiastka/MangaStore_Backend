import Collection from '../models/collectionModel.js'
import Manga from '../models/mangaModel.js'
import { Op } from 'sequelize'

export const postMangaController = async (req, res) => {
  try {
    const { nombre, volumen, imagen } = req.body
    const isCollection = await Collection.findOne({
      where: {
        nombre
      }
    })
    // console.log(isCollection)
    if (!isCollection) {
      res.status(400).json({ message: 'Se intentó agregar un manga a una colección no existente', data: isCollection })
    } else {
      console.log(nombre, volumen, imagen)
      const [newManga, wasCreated] = await Manga.findOrCreate({
        where: {
          volumen
        },
        include: {
          model: Collection,
          where: {
            nombre
          }
        },
        defaults: {
          imagen
        }
      })
      if (wasCreated) {
        console.log(nombre)
        await newManga.setCollection(isCollection)
        res.status(201).json({ message: 'Nuevo manga agregado correctamente', id: newManga.id, data: newManga })
      } else {
        res.status(201).json({ message: 'Volumen de manga ya existente', id: newManga.id, data: newManga })
      }
    }
  } catch (error) {
    res.status(500).json({ message: 'Ha ocurrido un error al crear un nuevo manga', error })
  }
}

export const getMangaController = async (req, res) => {
  try {
    const { query } = req

    const mangaSearch = await Manga.findAll({
      include: {
        model: Collection,
        where: {
          nombre: {
            [Op.iLike]: `%${query.nombre || ''}%`
          },
          autor: {
            [Op.iLike]: `%${query.autor || ''}%`
          },
          formato: {
            [Op.iLike]: `%${query.formato || ''}%`
          },
          genero: {
            [Op.iLike]: `%${query.genero || ''}%`
          }
        }
      }
    })
    res.status(200).json(mangaSearch)
  } catch (error) {
    res.status(404).json({ message: 'Error al encontrar manga', error })
  }
}

export const getMangaByIDController = async (req, res) => {
  try {
    const { id } = req.params
    const mangaSearchByID = await Manga.findByPk(id, { include: Collection })
    res.status(200).json(mangaSearchByID)
  } catch (error) {
    res.status(404).json({ message: `Error al encontrar manga con id: ${req.params.id}`, error })
  }
}
