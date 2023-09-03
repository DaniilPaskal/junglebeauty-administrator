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
                <br />
                <label className='form-label'>
                    Type:
                    <br />
                    <select name='type' defaultValue={type} onChange={handleChange}>
                        <option value='litter'>Litter</option>
                    </select>
                </label>
                <br />
                <label className='form-label'>
                    Father: {king}
                    <br />
                    <select name='king' defaultValue={king} onChange={handleChange}>
                        {kings.map((cat) => {
                            return (
                                <option value={cat.name} key={cat.id}>{cat.name}</option>
                            );
                        })}
                    </select>
                </label>
                <br />
                <label className='form-label'>
                    Queen: {queen}
                    <br />
                    <select name='queen' defaultValue={queen} onChange={handleChange}>
                        {queens.map((cat) => {
                            return (
                                <option value={cat.name} key={cat.id}>{cat.name}</option>
                            );
                        })}
                    </select>
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

export default NewsForm;