import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TextForm from './TextForm';
import NewsForm from './NewsForm';
import './../App.css';

const TextRow = ({ item }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr className='cat-row' onClick={handleShow}>
                {Object.keys(item).map((key) => {
                    return (
                        <td key={key}>{item[key]}</td>
                    );
                })}
            </tr>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <NewsForm item={item} />
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TextRow;