import { useState } from 'react';
import './../App.css';

const NewsForm = ({ item }) => {
    const [newItem, setNewItem] = useState(text);

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
                

                <div className='buttons-container'>
                    <button type='button' onClick={handleUpdate}>Update item</button>
                    <button type='button' onClick={handleDelete}>Delete item</button>
                </div>
            </form>
        </div>
    );
};

export default NewsForm;