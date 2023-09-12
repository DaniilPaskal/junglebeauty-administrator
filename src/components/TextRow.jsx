import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import TextForm from './TextForm';
import NewsForm from './NewsForm';
import ArticlesForm from './ArticlesForm';
import VideosForm from './VideosForm';
import './../App.css';

const TextRow = ({ item, type }) => {
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
                <Modal.Header closeButton>
                    <Modal.Title>
                        <h2>Modify {type}</h2>
                    </Modal.Title> 
                </Modal.Header>
                <Modal.Body>
                    {type === 'news' && <NewsForm item={item} />}
                    {type === 'articles' && <ArticlesForm item={item} />}
                    {type === 'videos' && <VideosForm item={item} />}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default TextRow;