import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getCatFilepath } from './Functions';
import { useCats } from '../contexts/CatsContext';
import { QueryCats, InsertCat, UpdateCat, UpdateChildren, DeleteCat, GetAllImages, UploadImages } from './FirebaseFunctions';
import ImageCarousel from './ImageCarousel';
import './../App.css';

const defaultCat = {
    name: '',
    date: '',
    sex: 'male',
    adj: '',
    colour: 'silver',
    status: 'active',
    father: '',
    mother: '',
    cattery: '',
    location: '',
    videos: []
}

const CatForm = ({ cat = defaultCat }) => {
    const [newCat, setNewCat] = useState(cat);
    const { name, date, sex, adj, colour, status, father, mother, cattery, location, videos = [] } = newCat;
    const [images, setImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [type, setType] = useState(mother ? 'kitten' : 'parent');
    const cats = useCats();
    const kings = cats.parents.filter((cat) => cat.sex == 'male');
    const queens = cats.parents.filter((cat) => cat.sex == 'female');

    const getData = async () => {
        const images = await GetAllImages(getCatFilepath(cat));
        setImages(images);
    }

    useEffect(() => {
        if (cat != defaultCat) {
            getData();
        }
    }, [])

    const changeType = () => {
        if (type === 'parent') {
            setType('kitten');
            newCat.status = 'available';
            newCat.father = cats.parents.filter((cat) => cat.sex === 'male')[0].name;
            newCat.mother = cats.parents.filter((cat) => cat.sex === 'female')[0].name;
        } else {
            setType('parent');
            newCat.status = 'active';
            newCat.father = '';
            newCat.mother = '';
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewCat({ ...newCat, [name]: value });
    }

    const handleImageSelect = (event) => {
        const { files } = event.target;
        setNewImages(files);
    }

    const handleImageClear = () => {
        setNewImages([]);
    }

    const handleVideoChange = (event) => {
        const { value } = event.target;
        setNewCat({ ...newCat, [videos]: value.split(',')});
    }

    const handleAdd = async () => {
        InsertCat(`${type}s`, newCat);
        if (newImages.length > 0) {
            UploadImages(getCatFilepath(newCat), newImages);
        }
        alert(`Cat added with the following attributes:\n
            Name: ${newCat.name}\n
            Date: ${newCat.date}\n
            Sex: ${newCat.sex}\n
            Colour: ${newCat.colour}\n
            Descriptor: ${newCat.adj}\n
            Mother: ${newCat.mother}\n
            Father: ${newCat.father}\n
            Status: ${newCat.status}\n
            `);
    }

    const handleUpdate = async () => {
        UpdateCat(`${type}s`, newCat);
        if (type == 'parent') {
            UpdateChildren(cat.name, newCat.name, cat.sex);
        }
        if (newImages.length > 0) {
            UploadImages(getCatFilepath(newCat), newImages);
        }
        window.location.reload(false);
    }

    const handleDelete = async () => {
        DeleteCat(`${type}s`, cat);
    }

    return (
        <div className='form-container'>
            <form>
                {cat == defaultCat &&
                    <div>
                        <label className='form-label'>
                            Cat type:
                            <br />
                            <select name='type' value={type} onChange={changeType}>
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
                                {queens.map((queen) => {
                                    return (
                                        <option value={queen.name} key={queen.id}>{queen.name}</option>
                                    );
                                })}
                            </select>
                        </label>
                        <br />
                        <label className='form-label'>
                            Father: {father}
                            <br />
                            <select name='father' defaultValue={father} onChange={handleChange}>
                                {kings.map((king) => {
                                    return (
                                        <option value={king.name} key={king.id}>{king.name}</option>
                                    );
                                })}
                            </select>
                        </label>
                    </>
                    :
                    <>
                        <label className='form-label'>
                            Cattery:
                            <br />
                            <input name='cattery' type='text' defaultValue={cattery} onChange={handleChange} />
                        </label>
                        <br />
                        <label className='form-label'>
                            Location:
                            <br />
                            <input name='location' type='text' defaultValue={location} onChange={handleChange} />
                        </label>
                    </>
                    }
                </div>

                <div>
                    <label className='form-label'>
                        Images:
                        <br />
                        <input name='images' type='file' accept='image/*' multiple onChange={handleImageSelect}/>
                        <button type='button' onClick={handleImageClear}>Clear</button>
                    </label>
                </div>

                <div>
                    <label className='form-label'>
                        Videos:
                        <br />
                        <textarea name='video' type='text' defaultValue={videos} onChange={handleVideoChange} />
                        {/*
                        <table>
                            {videos.map((video) => {
                                <tr>{video}</tr>
                            })}
                            <tr>
                                <input name='video' type='url' onChange={handleVideoChange} />
                            </tr>
                        </table>
                        */}
                    </label>
                </div>
            </form>

            <div className='carousel-container'>
                {cat != defaultCat && <ImageCarousel images={[...images, newImages]} />}
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
        </div>
    );
};

export default CatForm;