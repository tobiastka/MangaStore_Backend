import { Router } from 'express'
import { getCollectionController, postCollectionController } from '../controllers/collectionControllers.js'

const routerCollection = Router()

routerCollection.post('/', postCollectionController)
routerCollection.get('/', getCollectionController)
export default routerCollection
/*
Test Call
{
    "nombre":"Tokyo Ghoul",
    "autor":"Sui Ishida",
    "cantidadVolumenes":14,
    "formato":"Tankoubon",
    "imagenBanner":"https://images.fanart.tv/fanart/tokyo-ghoul-615ea53b29fe5.png",
    "resumenHistoria":"Ken Kaneki es un estudiante tímido y recluido que queda obnubilado cuando la hermosa Rize lo invita a salir. Lo que no sabe es que Rize guarda un peligroso secreto: Es una ghoul y sólo le interesa comérselo. Tras un rescate fallido, Ken se convierte en el primer híbrido ghoul-humano, y se ve forzado a sumergirse en el violento y oscuro mundo de los Ghouls si quiere sobrevivir a su nueva e insólita condición.",
    "genero":"Seinen"
}

*/
