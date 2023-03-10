import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { InsertCat, UpdateCat, UpdateChildren, DeleteCat } from './FirebaseFunctions';
import ImageCarousel from './ImageCarousel';
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
        UpdateCat(`${type}s`, newCat);
        if (type == 'parent') {
            UpdateChildren(cat.name, newCat.name, cat.sex);
        }
    }

    const handleDelete = async () => {
        DeleteCat(`${type}s`, cat);
    }

    const handleImageUpload = async () => {
        
    }

    return (
        <div className='form-container'>
            <form>
                {cat == defaultCat &&
                    <div>
                        <label className='form-label'>
                            Cat type:
                            <br />
                            <select name='type' value={type} onChange={(e) => setType(e.target.value)}>
                                <option value='kitten'>Kitten</option>
                                <option value='parent'>Parent</option>
                            </select>
                        </label>
                    </div>
                }
                    
                <div>
                    <label className='form-label'>
                        Name:
                        <br />
                        <input name='name' type='text' defaultValue={name} onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Date of birth:
                        <br />
                        <input name='date' type='date' defaultValue={date} onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Sex:
                        <br />
                        <select name='sex' defaultValue={sex} onChange={handleChange}>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                        </select>
                    </label>
                    <br />
                    <label className='form-label'>
                        Status:
                        <br />
                        <select name='status' defaultValue={status} onChange={handleChange}>
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
                    <br />
                    <label className='form-label'>
                        Descriptor:
                        <br />
                        <input name='adj' type='text' defaultValue={adj} onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Fur colour:
                        <br />
                        <select name='colour' defaultValue={colour} onChange={handleChange}>
                            <option value='silver'>Silver</option>
                            <option value='brown'>Brown</option>
                        </select>
                    </label>
                </div>

                <div>
                    {type == 'kitten'
                    ?
                    <>
                        <label className='form-label'>
                            Mother: {mother}
                            <br />
                            <select name='mother' defaultValue={mother} onChange={handleChange}>
                                
                            </select>
                        </label>
                        <br />
                        <label className='form-label'>
                            Father: {father}
                            <br />
                            <select name='father' defaultValue={father || ''} onChange={handleChange}>
                                
                            </select>
                        </label>
                    </>
                    :
                    <>
                        <label className='form-label'>
                            Cattery:
                            <br />
                            <input name='cattery' type='text' defaultValue={cattery || ''} onChange={handleChange} />
                        </label>
                        <br />
                        <label className='form-label'>
                            Location:
                            <br />
                            <input name='location' type='text' defaultValue={location || ''} onChange={handleChange} />
                        </label>
                    </>
                    }
                </div>
            </form>

            {cat != defaultCat &&
                <div className='carousel-container'>
                    <ImageCarousel cat={cat} />
                    <button type='button' onClick={handleImageUpload}>Upload images</button>
                </div>
            }

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
        </div>
    );
};

export default CatForm;