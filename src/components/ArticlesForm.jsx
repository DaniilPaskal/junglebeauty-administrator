import { useState } from 'react';
import { useArticles } from '../contexts/ArticlesContext';
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
    const articles = useArticles();

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
        alert("Update submitted. Please reload page to see changes.")
    }

    return (
        <div className='form-container'>
            <form>
                <label className='form-label'>
                    Title:
                    <br />
                    <input name='title' type='text' defaultValue={title} onChange={handleChange} />
                </label>
                <br />
                <label className='form-label'>
                    Body:
                    <br />
                    <textarea name='body' defaultValue={body} onChange={handleChange} />
                </label>
                <br />
                <label className='form-label'>
                    Date:
                    <br />
                    <input name='date' type='date' defaultValue={date} onChange={handleChange} />
                </label>

                <div className='buttons-container'>
                    {item === defaultItem
                        ?
                            <button type='button' onClick={handleAdd}>Add item</button>
                        :
                        <>
                            <button type='button' onClick={handleUpdate}>Update item</button>
                            <button type='button' onClick={handleDelete}>Delete item</button>
                        </>
                }
                </div>
            </form>
        </div>
    );
};

export default ArticlesForm;