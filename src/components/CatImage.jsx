import { useState, useEffect } from 'react';
import { GetImage } from './FirebaseFunctions';

const CatImage = ({ filepath }) => {
    const [image, setImage] = useState();

    const getImage = async () => {
        const image = await GetImage(filepath);
        setImage(image);
      }
    
      useEffect(() => {
        getImage();
      }, [])

    return (
        <img className='cat-img' src={image}/>
    );
}

export default CatImage;