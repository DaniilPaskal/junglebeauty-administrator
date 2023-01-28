import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './../App.css';

const CatForm = ({ cat }) => {
    const [formFields, setFormFields] = useState('');
    const [type, setType] = useState('parent');
    const { name, date, sex, adj, colour, status, father, mother, cattery, location } = formFields;
    
    const resetFormFields = () => {
        setFormFields('');
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value});
    }

    const handleSubmit = async (event) => {

    }

    return (
        <div className='sign-up-container'>
            <h2>Add new cat to database:</h2>
            <form onSubmit={handleSubmit}>
                {!cat &&
                <select value={this.state.value}>
                    <option value='kitten'>Kitten</option>
                    <option value='parent'>Parent</option>
                </select>
                }
                
                <label>
                    <input type='radio' value='Kitten' checked={true} />
                </label>
                    
                <div className='buttons-container'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CatForm;