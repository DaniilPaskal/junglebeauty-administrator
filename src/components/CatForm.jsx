import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import './../App.css';

const defaultCat = {
    name: '',
    date: '',
    sex: '',
    adj: '',
    colour: '',
    status: '',
    father: '',
    mother: '',
    cattery: '',
    location: ''
}

const CatForm = ({ cat = defaultCat }) => {
    const [formFields, setFormFields] = useState('');
    //const [cat, setCat] = useState(cat);
    const [type, setType] = useState('kitten');
    const { name, date, sex, adj, colour, status, father, mother, cattery, location } = cat;

    console.log(cat);
    
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
                <div>
                    {!cat &&
                    <label>
                        Cat type:
                        <select value={type} onChange={(e) => setType(e.target.value)}>
                            <option value='kitten'>Kitten</option>
                            <option value='parent'>Parent</option>
                        </select>
                    </label>
                    }
                </div>
                    
                <div>
                <label>
                    Name:
                    <input type='text' value={name} onChange={handleChange} />
                </label>
                <label>
                    Date of birth:
                    <input type='text' value={date} onChange={handleChange} />
                </label>
                <label>
                    Sex:
                    <select value={sex} onChange={handleChange}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select value={status} onChange={handleChange}>
                        <option value='available'>Available</option>
                        <option value='available'>Reserved</option>
                        <option value='available'>Graduated</option>
                        <option value='available'>Active</option>
                        <option value='available'>Retired</option>
                    </select>
                </label>
                <label>
                    Fur colour:
                    <select value={colour} onChange={handleChange}>
                        <option value='silver'>Silver</option>
                        <option value='brown'>Brown</option>
                    </select>
                </label>
                <label>
                    Descriptor:
                    <input type='text' value={adj} onChange={handleChange} />
                </label>
                </div>

                <div>
                    {type == 'kitten' ?
                    <>
                        <label>
                            Mother:
                            <select value={mother || ''} onChange={handleChange}>
                                
                            </select>
                        </label>
                        <label>
                            Father:
                            <select value={father || ''} onChange={handleChange}>
                                
                            </select>
                        </label>
                    </>
                    :
                    <>
                        <label>
                            Cattery:
                            <input type='text' value={cattery || ''} onChange={handleChange} />
                        </label>
                        <label>
                            Location:
                            <input type='text' value={location || ''} onChange={handleChange} />
                        </label>
                    </>
                    }
                </div>

                <div className='buttons-container'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CatForm;