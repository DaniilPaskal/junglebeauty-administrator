import { useEffect, useState } from 'react';
import { collection, doc, query, where, getDocs, addDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { getDatabase, push, set } from 'firebase/database';
import { signOut } from 'firebase/auth';
import { ref, getStorage, getDownloadURL, listAll, deleteObject, uploadBytes } from 'firebase/storage';
import { auth } from '../firebase';
import { db } from '../firebase';
import { getCatID } from './Functions';

const storage = getStorage();

export async function QueryCats(table, predicate = []) {
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

export async function InsertCat(table, cat) {
    const id = getCatID(cat);

    const docRef = doc(db, table, id);

    await setDoc(docRef, {});

    Object.keys(cat).map(async (key) => {
        if (cat[key].length > 0) {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        }
    });
}

export async function UpdateCat(table, cat) {
    const id = cat.id;
    const docRef = doc(db, table, id);

    Object.keys(cat).map(async (key) => {
        if (cat[key].length > 0) {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        } 
    });
}

export async function UpdateChildren(oldName, newName, parentSex) {
    const kittens = QueryCats('kittens', [parentSex === 'male' ? 'father' : 'mother', '==', oldName]);
        
    (await kittens).map(async (kitten) => {
        const kittenDocRef = doc(db, 'kittens', kitten.id);
        
        await updateDoc(kittenDocRef, {
            [parentSex === 'male' ? 'father' : 'mother']: newName
        })
    })
}

export async function DeleteCat(table, cat) {
    const id = cat.id;

    await deleteDoc(doc(db, table, id));
    window.location.reload(false);
}

export async function GetImage(filepath) {
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/${filepath}`));

    return url;
}

export async function GetAllImages(filepath) {
    const images = [];
    const storageRef = ref(storage, filepath);
    
    const result = await listAll(storageRef);
    
    result.items.forEach(image => {
        images.push(image.fullPath);
    })
    
    return images;
}

export async function UploadImages(filepath, images) {
    console.log(filepath);
    Array.from(images).map((image) => {
        const imageRef = ref(storage, `${filepath}/${image.name}`);
        uploadBytes(imageRef, image);
    })
}

export async function DeleteImage(filepath) {
    deleteObject(ref(storage, filepath));
}

export async function GetList(listName) {
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Lists/${listName}`));
    console.log(url)
    const list = await fetch(url);
    console.log(list)
    const data = await list.json();
    console.log(data)

    return data;
}

export async function GetText(textName) {
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Texts/${textName}`));
    const list = await fetch(url);
    const data = await list.json();

    return data;
}

export function handleLogout() {
    signOut(auth);
}