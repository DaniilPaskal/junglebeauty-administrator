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
    const [type, setType] = useState('kitten');
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
                <div>
                    {!cat &&
                    <label>
                        Cat type:
                        <select value={this.state.value} onChange={(e) => setType(e.target.value)}>
                            <option selected value='kitten'>Kitten</option>
                            <option value='parent'>Parent</option>
                        </select>
                    </label>
                    }
                </div>
                    
                <div>
                <label>
                    Name:
                    <input type='text' value={name} />
                </label>
                <label>
                    Date of birth:
                    <input type='text' value={date} />
                </label>
                <label>
                    Sex:
                    <select value={this.state.value}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select value={this.state.value}>
                        <option selected value='available'>Available</option>
                    </select>
                </label>
                <label>
                    Fur colour:
                    <input type='text' value={colour} />
                </label>
                <label>
                    Descriptor:
                    <input type='text' value={adj} />
                </label>
                </div>

                <div>
                    {type == 'kitten' ?
                    <>
                        <label>
                            Mother:
                            <select value={this.state.value}>
                                
                            </select>
                        </label>
                        <label>
                            Father:
                            <select value={this.state.value}>
                                
                            </select>
                        </label>
                    </>
                    :
                    <>
                        <label>
                            Cattery:
                            <input type='text' value={cattery} />
                        </label>
                        <label>
                            Location:
                            <input type='text' value={location} />
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