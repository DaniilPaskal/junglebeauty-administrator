import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './../App.css';

const CatRow = ({ cat }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr onClick={handleShow}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.date || `N/A`}</td>
                <td>{cat.status || `N/A`}</td>
            </tr>

            <Modal show={show} onHid={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CatRow;