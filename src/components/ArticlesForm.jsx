import { useState } from 'react';
import { useLists } from '../contexts/ListsContext';
import { updateList } from './FirebaseFunctions';
import './../App.css';

const defaultItem = {
    id: 0,
    title: '',
    body: '',
    date: ''
}

const ArticlesForm = ({ item = defaultItem }) => {
    const [newItem, setNewItem] = useState(item);
    const { title, body, date } = newItem;
    const articles = useLists().articles;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    }

    const handleAdd = () => {
        newItem.id = articles.length + 1;
        articles.push(newItem);
        submitUpdate();
    }

    const handleUpdate = () => {
        const index = articles.map((item) => item.id).indexOf(item.id);
        articles[index] = newItem;
        submitUpdate();
    }

    const handleDelete = () => {
        const index = articles.map((item) => item.id).indexOf(item.id);
        articles.splice(index, 1);
        submitUpdate();
    }

    const submitUpdate = async () => {
        updateList(articles, 'Articles-List.json');
        alert("Update submitted. Please reload page to see changes.");
    }

    return (
        <form>
            <div className='form-container'>
                <label className='form-label' for='title'>Title:</label>
                <input name='title' id='title' type='text' defaultValue={title} onChange={handleChange} />

                <label className='form-label' for='body'>Body:</label>
                <textarea name='body' id='body' defaultValue={body} onChange={handleChange} />

                <label className='form-label' for='date'>Date:</label>
                <input name='date' id='date' type='date' defaultValue={date} onChange={handleChange} />

                <div className='buttons-container'>
                    {item === defaultItem
                        ?
                            <button type='button' className='form-button' onClick={handleAdd}>Add item</button>
                        :
                        <>
                            <button type='button' className='form-button' onClick={handleUpdate}>Update item</button>
                            <button type='button' className='form-button' onClick={handleDelete}>Delete item</button>
                        </>
                    }
                </div>
            </div>
        </form>
    );
};

export default ArticlesForm;