import { useState } from 'react';
import { useCats } from '../contexts/CatsContext';
import './../App.css';

const defaultItem = {
    title: '',
    body: '',
    date: '',
    type: 'litter',
    king: '',
    queen: ''
}

const NewsForm = ({ item = defaultItem }) => {
    const [newItem, setNewItem] = useState(text);
    const { title, body, date, type, king, queen } = newItem;
    const kings = cats.parents.filter((cat) => cat.sex == 'male');
    const queens = cats.parents.filter((cat) => cat.sex == 'female');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewItem({ ...newItem, [name]: value });
    }

    const handleAdd = async () => {
        
    }

    const handleUpdate = async () => {
        
    }

    const handleDelete = async () => {
        
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
                    Queen: {mother}
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
                    {item == defaultItem
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