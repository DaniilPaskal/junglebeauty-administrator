import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getImage, deleteImage } from './FirebaseFunctions';

const CatImage = ({ filepath }) => {
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const downloadImage = async () => {
      const image = await getImage(filepath);
      setImage(image);
    }
  
    useEffect(() => {
      downloadImage();
    }, [])

    const handleDelete = async () => {
      handleClose();
      deleteImage(filepath);
    }

    return (
      <>
          <img className='cat-img' src={image} onClick={handleShow}/>

          <Modal show={show} onHide={handleClose} size='lg'>
              <Modal.Header closeButton/>
              <Modal.Body>
                <img className='cat-img' src={image}/>
                <button onClick={handleDelete}>Delete</button>
              </Modal.Body>
          </Modal>
      </>
    );
}

export default CatImage;