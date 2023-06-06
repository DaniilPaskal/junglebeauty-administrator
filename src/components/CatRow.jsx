import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CatForm from './CatForm';
import './../App.css';

const CatRow = ({ cat }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr className='cat-row' onClick={handleShow}>
                <td>{cat.id}</td>
                <td>{cat.name}</td>
                <td>{cat.date || `N/A`}</td>
                {cat.mother && <td>{cat.mother}</td>}
                {cat.father && <td>{cat.father}</td>}
                {!cat.mother && <td>{cat.sex}</td>}
                <td>{cat.status || `N/A`}</td>
            </tr>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <CatForm cat={cat} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default CatRow;