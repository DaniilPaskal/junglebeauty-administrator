import { useState } from 'react';
import { GetList } from './FirebaseFunctions';
import ImageCarousel from './ImageCarousel';
import './../App.css';

const TextForm = ({ text }) => {
    const [newText, setNewText] = useState(text);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewText({ ...newText, [name]: value });
    }

    const handleAdd = async () => {
        
    }

    const handleUpdate = async () => {
        
    }

    return (
        <div className='form-container'>
            <form>
                

                <div className='buttons-container'>
                    <button type='button' onClick={handleUpdate}>Update item</button>
                </div>
            </form>
        </div>
    );
};

export default TextForm;