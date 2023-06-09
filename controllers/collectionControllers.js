import { Op } from 'sequelize'
import Collection from '../models/collectionModel.js'

export const postCollectionController = async (req, res) => {
  try {
    const { nombre, autor, cantidadVolumenes, formato, imagenBanner, resumenHistoria, genero } = req.body

    const isCollection = await Collection.findOne({
      where: { nombre, autor }
    })

    if (isCollection) {
      res.status(201).json({ message: 'Se esta intentando crear una coleccion ya existente', id: isCollection.id, data: isCollection })
    } else {
      const newCollection = await Collection.create({ nombre, autor, cantidadVolumenes, formato, imagenBanner, resumenHistoria, genero })
      res.status(201).json({ message: 'Nueva colección de manga creada correctamente', id: newCollection.id, data: newCollection })
    }
  } catch (error) {
    res.status(500).json({ message: 'Ha ocurrido un error al crear una nueva colección de manga', error })
  }
}

export const getCollectionController = async (req, res) => {
  try {
    const { nombre } = req.query
    if (nombre) {
      const collection = await Collection.findOne({
        where: {
          nombre: { [Op.iLike]: `%${nombre}%` }
        }
      })
      res.status(201).json(collection)
    } else {
      const collections = await Collection.findAll()
      res.status(201).json(collections)
    }
  } catch (error) {
    res.status(500).json({ message: 'Ha ocurrido un error al buscar una colección de manga', error })
  }
}
