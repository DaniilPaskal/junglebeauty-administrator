import { useState } from 'react';
import { useCats } from '../contexts/CatsContext';
import { useLists } from '../contexts/ListsContext';
import { updateList } from './FirebaseFunctions';
import './../App.css';

const defaultItem = {
    id: 0,
    title: '',
    body: '',
    date: '',
    type: 'litter',
    king: '',
    queen: ''
}

const NewsForm = ({ item = defaultItem }) => {
    const [newItem, setNewItem] = useState(item);
    const { title, body, date, type, king, queen } = newItem;
    const news = useLists().news;
    const cats = useCats();
    const kings = cats.parents.filter((cat) => cat.sex === 'male');
    const queens = cats.parents.filter((cat) => cat.sex === 'female');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    }

    const handleAdd = () => {
        newItem.id = news.length + 1;
        news.push(newItem);
        submitUpdate();
    }

    const handleUpdate = () => {
        const index = news.map((item) => item.id).indexOf(item.id);
        news[index] = newItem;
        submitUpdate();
    }

    const handleDelete = () => {
        const index = news.map((item) => item.id).indexOf(item.id);
        news.splice(index, 1);
        submitUpdate();
    }

    const submitUpdate = async () => {
        updateList(news, 'News-List.json');
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

                <label className='form-label' for='type'>Type:</label>
                <select name='type' id='type' defaultValue={type} onChange={handleChange}>
                    <option value='litter'>Litter</option>
                </select>

                <label className='form-label' for='king'>Father: {king}</label>
                <select name='king' id='king' defaultValue={king} onChange={handleChange}>
                    {kings.map((cat) => {
                        return (
                            <option value={cat.name} key={cat.id}>{cat.name}</option>
                        );
                    })}
                </select>

                <label className='form-label' for='queen'>Queen: {queen}</label>
                <select name='queen' id='queen' defaultValue={queen} onChange={handleChange}>
                    {queens.map((cat) => {
                        return (
                            <option value={cat.name} key={cat.id}>{cat.name}</option>
                        );
                    })}
                </select>

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

export default NewsForm;