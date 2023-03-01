import { useState } from 'react';
import { GetList } from './DBFunctions';
import ImageCarousel from './ImageCarousel';
import './../App.css';

const TextForm = ({ text }) => {
    const [text, setText] = useState(text);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setText({ ...text, [name]: value });
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
            <ImageCarousel cat={cat} />
        </div>
    );
};

export default TextForm;