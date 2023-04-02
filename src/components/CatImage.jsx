import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { GetImage } from './FirebaseFunctions';

const CatImage = ({ filepath }) => {
    const [image, setImage] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const getImage = async () => {
        const image = await GetImage(filepath);
        setImage(image);
      }
    
      useEffect(() => {
        getImage();
      }, [])

    const handleDelete = async () => {
      
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