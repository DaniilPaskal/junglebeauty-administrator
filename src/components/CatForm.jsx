import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { InsertCat, UpdateCat, DeleteCat } from './DBFunctions';
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
    const oldName = cat.name;
    const oldDate = cat.date;
    const [newCat, setNewCat] = useState(cat);
    const { name, date, sex, adj, colour, status, father, mother, cattery, location } = newCat;
    const [type, setType] = useState(mother ? 'kitten' : 'parent');
    
    const resetForm = () => {
        setNewCat(defaultCat);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewCat({ ...newCat, [name]: value });
    }

    const handleAdd = async () => {
        InsertCat(`${type}s`, cat);
    }

    const handleUpdate = async () => {
        //UpdateCat(`${type}s`, cat);
        console.log(cat);
    }

    const handleDelete = async () => {
        DeleteCat(`${type}s`, cat);
    }

    return (
        <div className='form-container'>
            <form>
                {cat == defaultCat &&
                    <div>
                        <label>
                            Cat type:
                            <select value={type} onChange={(e) => setType(e.target.value)}>
                                <option value='kitten'>Kitten</option>
                                <option value='parent'>Parent</option>
                            </select>
                        </label>
                    </div>
                }
                    
                <div>
                <label>
                    Name:
                    <input type='text' defaultValue={name} onChange={handleChange} />
                </label>
                <label>
                    Date of birth:
                    <input type='text' defaultValue={date} onChange={handleChange} />
                </label>
                <label>
                    Sex:
                    <select defaultValue={sex} onChange={handleChange}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </select>
                </label>
                <label>
                    Status:
                    <select defaultValue={status} onChange={handleChange}>
                        {type == 'kitten'
                        ?
                        <>
                            <option value='available'>Available</option>
                            <option value='reserved'>Reserved</option>
                            <option value='graduated'>Graduated</option>
                        </>
                        :
                        <>
                            <option value='active'>Active</option>
                            <option value='retired'>Retired</option>
                        </>
                        }
                    </select>
                </label>
                <label>
                    Fur colour:
                    <select defaultValue={colour} onChange={handleChange}>
                        <option value='silver'>Silver</option>
                        <option value='brown'>Brown</option>
                    </select>
                </label>
                <label>
                    Descriptor:
                    <input type='text' defaultValue={adj} onChange={handleChange} />
                </label>
                </div>

                <div>
                    {type == 'kitten'
                    ?
                    <>
                        <label>
                            Mother:
                            <select defaultValue={mother || ''} onChange={handleChange}>
                                
                            </select>
                        </label>
                        <label>
                            Father:
                            <select defaultValue={father || ''} onChange={handleChange}>
                                
                            </select>
                        </label>
                    </>
                    :
                    <>
                        <label>
                            Cattery:
                            <input type='text' defaultValue={cattery || ''} onChange={handleChange} />
                        </label>
                        <label>
                            Location:
                            <input type='text' defaultValue={location || ''} onChange={handleChange} />
                        </label>
                    </>
                    }
                </div>

                <div className='buttons-container'>
                    {cat == defaultCat
                    ?
                        <button type='button' onClick={handleAdd}>Add cat</button>
                    :
                    <>
                        <button type='button' onClick={handleUpdate}>Update cat</button>
                        <button type='button' onClick={handleDelete}>Delete cat</button>
                    </>
                    }
                </div>
            </form>
        </div>
    );
};

export default CatForm;