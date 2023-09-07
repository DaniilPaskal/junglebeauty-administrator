import { Table, Modal } from "react-bootstrap";
import { useState } from "react";
import TextRow from "../components/TextRow";
import NewsForm from "../components/NewsForm";
import ArticlesForm from "./ArticlesForm";
import './../App.css';

const ListTable = ({ list, type }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type='button' onClick={handleShow}>Add list item</button>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    {Object.keys(list[0]).map((key) => {
                        return (
                            <th key={key}>{key}</th>
                        );
                    })}
                    </tr>
                </thead>
                <tbody>
                    {list &&
                    list.map((listItem) => {
                        return (
                        <TextRow item={listItem} key={listItem.id} />
                        );
                    })
                    }
                </tbody>
            </Table>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton/>
                <Modal.Body>
                    {type === 'news' && <NewsForm />}
                    {type === 'articles' && <ArticlesForm />}
                    {type === 'videos' && <VideosForm />}
                </Modal.Body>
            </Modal>
        </>
    );
};

export default ListTable;