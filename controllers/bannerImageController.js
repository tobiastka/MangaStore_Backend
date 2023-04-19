import BannerImage from '../models/bannerImageModel.js'

export const postBannerImageController = async (req, res) => {
  try {
    const { type, imageURL } = req.body
    const [bannerImage, wasCreated] = await BannerImage.findOrCreate({
      where: {
        imageURL
      },
      defaults: {
        type
      }
    })
    if (wasCreated) {
      res.status(201).json({ message: 'Se agrego una nueva imagen de forma correcta', data: bannerImage })
    } else {
      res.status(201).json({ message: 'Se esta intentando agregar una imagen ya existente', data: bannerImage })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Ocurrio algun error al tratar de subir una imagen', error })
  }
}

export const getBannerImageController = async (req, res) => {
  try {
    const { type } = req.query
    if (!type) {
      res.status(201).json({ message: 'Debe proporcionar un type para realizar la busqueda', type })
    } else {
      const bannerImages = await BannerImage.findAll({
        where: {
          type
        }
      })
      res.status(201).json(bannerImages)
    }
  } catch (error) {
    res.status(500).json({ message: 'Ocurrio buscar las imagenes', error })
  }
}
