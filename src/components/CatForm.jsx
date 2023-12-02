import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import { getCatFilepath } from './Functions';
import { useCats } from '../contexts/CatsContext';
import { queryCats, insertCat, updateCat, updateChildren, deleteCat, getAllImages, uploadImages } from './FirebaseFunctions';
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
    show: 'true',
    videos: []
}

const CatForm = ({ cat = defaultCat }) => {
    const [newCat, setNewCat] = useState(cat);
    const { name, date, sex, adj, colour, status, father, mother, cattery, location, video, show } = newCat;
    const [images, setImages] = useState([]);
    const [newImages, setNewImages] = useState([]);
    const [type, setType] = useState(mother ? 'kitten' : 'parent');
    const cats = useCats();
    const kings = cats.parents.filter((cat) => cat.sex === 'male');
    const queens = cats.parents.filter((cat) => cat.sex === 'female');

    const getData = async () => {
        const images = await getAllImages(getCatFilepath(cat));
        setImages(images);
    }

    useEffect(() => {
        if (cat !== defaultCat) {
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

    const handleAdd = async () => {
        insertCat(`${type}s`, newCat);
        if (newImages.length > 0) {
            uploadImages(getCatFilepath(newCat), newImages);
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
        if (type === 'parent') {
            updateChildren(cat.name, newCat.name, cat.sex);
        }
        if (newImages.length > 0) {
            uploadImages(getCatFilepath(newCat), newImages);
        }
        updateCat(`${type}s`, newCat);
        //alert('Cat updated. Please refresh page to see changes.');
        //window.location.reload(false);
    }

    const handleDelete = async () => {
        deleteCat(`${type}s`, cat);
    }

    /*
    const handleVideoChange = (event) => {
        const { value } = event.target;
        setNewCat({ ...newCat, [videos]: value.split(',')});
    }
    */

    return (
        <div className='form-container'>
            <form>
                {cat === defaultCat &&
                    <>
                        <label className='form-label' for='type'>Cat type:</label>
                        <select name='type' id='type' value={type} onChange={changeType}>
                            <option value='kitten'>Kitten</option>
                            <option value='parent'>Parent</option>
                        </select>
                    </>
                }

                <label className='form-label' for='name'>Name:</label>
                <input name='name' id='name' type='text' defaultValue={name} onChange={handleChange} />

                <label className='form-label' for='date'>Date of birth:</label>
                <input name='date' id='date' type='date' defaultValue={date} onChange={handleChange} />

                <label className='form-label' for='sex'>Sex:</label>
                <select name='sex' id='sex' defaultValue={sex} onChange={handleChange}>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>

                <label className='form-label' for='status'>Status:</label>
                <select name='status' id='status' defaultValue={status} onChange={handleChange}>
                    {type === 'kitten'
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
                    <option value='no'>Null</option>
                </select>

                <label className='form-label' for='adj'>Descriptor:</label>
                <input name='adj' id='adj' type='text' defaultValue={adj} onChange={handleChange} />

                <label className='form-label' for='colour'>Fur colour:</label>
                <select name='colour' id='colour' defaultValue={colour} onChange={handleChange}>
                    <option value='silver'>Silver</option>
                    <option value='brown'>Brown</option>
                </select>        

                {type === 'kitten'
                ?
                <>
                    <label className='form-label' for='mother'>
                        Mother: {mother}
                        <br />
                        <select name='mother' id='mother' defaultValue={mother} onChange={handleChange}>
                            {queens.map((queen) => {
                                return (
                                    <option value={queen.name} key={queen.id}>{queen.name}</option>
                                );
                            })}
                        </select>
                    </label>
                    <br />
                    <label className='form-label' for='father'>
                        Father: {father}
                        <br />
                        <select name='father' id='father' defaultValue={father} onChange={handleChange}>
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

                <label className='form-label' for='images'>Images:</label>
                <input name='images' id='images' type='file' accept='image/*' multiple onChange={handleImageSelect}/>
                <button type='button' className='form-button' onClick={handleImageClear}>Clear</button>

                <label className='form-label' form='video'>Video:</label>
                <input name='video' id='video' type='text' defaultValue={video} onChange={handleChange} />
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

            <div className='carousel-container'>
                {cat !== defaultCat && <ImageCarousel images={[...images, newImages]} />}
            </div>

            <label className='form-label' for='show'>Show:</label>
            <select name='show' id='show' defaultValue={show} onChange={handleChange}>
                <option value={'true'}>True</option>
                <option value={'false'}>False</option>
            </select>

            <div className='buttons-container'>
                {cat === defaultCat
                ?
                    <button type='button' className='form-button' onClick={handleAdd}>Add cat</button>
                :
                <>
                    <button type='button' className='form-button' onClick={handleUpdate}>Update cat</button>
                    <button type='button' className='form-button' onClick={handleDelete}>Delete cat</button>
                </>
                }
            </div>
            </form>
        </div>
    );
};

export default CatForm;