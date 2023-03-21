import { useEffect, useState } from "react"
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = (category) => {

   const [images, setImages] = useState([])
   const [isLoading, setIsLoading] = useState (true);


    const getImages = async() => {
        // llamamos al servicio
        const newImages = await getGifs(category)
        // metemos las imagenes nuevas
        setImages(newImages)
        // cambiamos el estado a false porque ya está cargado
        setIsLoading(false)
    }

    useEffect(() => {
        // se crea una función para devolver las imagenes y para llamar a la petición
        getImages();
    }, [])

    return {
        images: images,
        isLoading: isLoading
    }

}
