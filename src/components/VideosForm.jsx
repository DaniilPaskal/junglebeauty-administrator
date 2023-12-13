import { useState } from 'react';
import { useLists } from '../contexts/ListsContext';
import { updateList } from './FirebaseFunctions';
import './../App.css';

const defaultItem = {
    id: 0,
    desc: '',
    video_id: '',
}

const VideosForm = ({ item = defaultItem }) => {
    const [newItem, setNewItem] = useState(item);
    const { desc, video_id } = newItem;
    const videos = useLists().videos;

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === 'video-id') {
            const index = value.indexOf('?');
            if (index > -1) {
                value = value.slice(index + 1);
            }
        }

        setNewItem({ ...newItem, [name]: value });
    }

    const handleAdd = () => {
        newItem.id = videos.length + 1;
        videos.push(newItem);
        submitUpdate();
    }

    const handleUpdate = () => {
        const index = videos.map((item) => item.id).indexOf(item.id);
        videos[index] = newItem;
        submitUpdate();
    }

    const handleDelete = () => {
        const index = videos.map((item) => item.id).indexOf(item.id);
        videos.splice(index, 1);
        submitUpdate();
    }

    const submitUpdate = async () => {
        updateList(videos, 'Videos-List.json');
        alert("Update submitted. Please reload page to see changes.");
    }

    return (
        <form>
            <div className='form-container'>
                <label className='form-label' for='desc'>Description:</label>
                <textarea name='desc' id='desc' type='text' defaultValue={desc} onChange={handleChange} />

                <label className='form-label' for='video-id'>Video ID:</label>
                <input name='video-id' for='video-id' type='text' defaultValue={item['video-id']} onChange={handleChange} />

                <div className='buttons-container'>
                    {item === defaultItem
                        ?
                            <button type='button' className='form-button' onClick={handleAdd}>Add item</button>
                        :
                        <>
                            <button type='button' className='form-button' onClick={handleUpdate}>Update item</button>
                            <button type='button' className='form-button' onClick={handleDelete}>Delete item</button>
                        </>
                    }
                </div>
            </div>
        </form>
    );
};

export default VideosForm;