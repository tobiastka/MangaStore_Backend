import { Router } from 'express'
import { getBannerImageController, postBannerImageController } from '../controllers/bannerImageController.js'

const routerBannerImage = Router()

routerBannerImage.post('/', postBannerImageController)
routerBannerImage.get('/', getBannerImageController)
export default routerBannerImage
