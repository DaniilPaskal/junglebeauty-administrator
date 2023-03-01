import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TextForm from './TextForm';
import './../App.css';

const TextRow = ({ text }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr className='cat-row' onClick={handleShow}>
                <td>{text}</td>
            </tr>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <TextForm text={text} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TextRow;