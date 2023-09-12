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
    const { title, body, date } = newItem;
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
        <div className='form-container'>
            <form>
                <label className='form-label'>
                    Description:
                    <br />
                    <input name='desc' type='text' defaultValue={title} onChange={handleChange} />
                </label>
                <br />
                <label className='form-label'>
                    Video ID:
                    <br />
                    <input name='video-id' type='text' defaultValue={body} onChange={handleChange} />
                </label>

                <div className='buttons-container'>
                    {item === defaultItem
                        ?
                            <button type='button' onClick={handleAdd}>Add item</button>
                        :
                        <>
                            <button type='button' onClick={handleUpdate}>Update item</button>
                            <button type='button' onClick={handleDelete}>Delete item</button>
                        </>
                }
                </div>
            </form>
        </div>
    );
};

export default VideosForm;