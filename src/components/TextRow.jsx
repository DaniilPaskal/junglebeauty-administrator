import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TextForm from './TextForm';
import './../App.css';

const TextRow = ({ item }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    console.log(item)

    return (
        <>
            <tr className='cat-row' onClick={handleShow}>
                {Object.keys(item).map((key) => {
                    return (
                        <td>{item[key]}</td>
                    );
                })}
            </tr>

            {/* <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    <TextForm text={text} />
                </Modal.Body>
            </Modal> */}
        </>
    );
};

export default TextRow;