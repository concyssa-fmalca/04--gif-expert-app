import { getGifs } from "../helpers/getGifs"
import { useState, useEffect } from "react";

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    const getImages = async(category) => {
        const newImages = await getGifs(category)
        setImages(newImages)
    }


    useEffect(  ()  => {
        getImages(category)
    },[])

  return (
    <>
        <h3>{category}</h3>
        <ol>
        {images.map(image => (
            <li key={image.id}>{image.title}</li>
        ))}
        </ol>
    </>
  )
}
