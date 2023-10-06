import { collection, doc, query, where, getDocs, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { ref, getStorage, getDownloadURL, listAll, deleteObject, uploadBytes } from 'firebase/storage';
import { auth } from '../firebase';
import { db } from '../firebase';
import { getCatID } from './Functions';

const storage = getStorage();

export async function queryCats(table, predicate = []) {
    const cats = [];
    var q;

    if (predicate.length === 0) {
        q = query(collection(db, table));
    } else {
        q = query(collection(db, table), where(...predicate));
    }

    const docRefs = await getDocs(q);

    docRefs.forEach(doc => {
        cats.push({...doc.data(), id: doc.id});
    })
    
    return cats;
}

export async function insertCat(table, cat) {
    const id = getCatID(cat);

    const docRef = doc(db, table, id);

    await setDoc(docRef, {});

    Object.keys(cat).map(async (key) => {
        if (cat[key].length > 0) {
            await updateDoc(docRef, {
                [key]: cat[key]
            });
        }
    });
}

export async function updateCat(table, cat) {
    const id = cat.id;
    const docRef = doc(db, table, id);

    Object.keys(cat).map(async (key) => {
        if (cat[key].length > 0) {
            await updateDoc(docRef, {
                [key]: cat[key]
            });
            window.location.reload();
        } 
    });
}

export async function updateChildren(oldName, newName, parentSex) {
    const kittens = queryCats('kittens', [parentSex === 'male' ? 'father' : 'mother', '==', oldName]);
        
    (await kittens).map(async (kitten) => {
        const kittenDocRef = doc(db, 'kittens', kitten.id);
        
        await updateDoc(kittenDocRef, {
            [parentSex === 'male' ? 'father' : 'mother']: newName
        })
    })
}

export async function deleteCat(table, cat) {
    const id = cat.id;

    await deleteDoc(doc(db, table, id));
    window.location.reload();
}

export async function getImage(filepath) {
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/${filepath}`));

    return url;
}

export async function getAllImages(filepath) {
    const images = [];
    const storageRef = ref(storage, filepath);
    
    const result = await listAll(storageRef);
    
    result.items.forEach(image => {
        images.push(image.fullPath);
    })
    
    return images;
}

export async function uploadImages(filepath, images) {
    Array.from(images).map((image) => {
        const imageRef = ref(storage, `${filepath}/${image.name}`);
        uploadBytes(imageRef, image);
    })
}

export async function deleteImage(filepath) {
    deleteObject(ref(storage, filepath));
}

export async function getList(listName) {
    const list = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Lists/${listName}`))
        .then(url => fetch(url))
        .then(result => result.json())
        .then(data => {return data});

    return list;
}

export async function updateList(list, listName) {
    const jsonList = JSON.stringify(list);
    const blob = new Blob([jsonList], {type: 'application/json'});
    const storageRef = ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Lists/${listName}`);

    uploadBytes(storageRef, blob);
}

export async function getText(textName) {
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Texts/${textName}`));
    const list = await fetch(url);
    const data = await list.json();

    return data;
}

export function handleLogout() {
    signOut(auth);
}