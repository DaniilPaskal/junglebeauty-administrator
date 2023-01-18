import { useEffect, useState } from 'react';
import { collection, doc, query, where, getDocs, addDoc, setDoc, updateDoc } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';

export async function QueryCats(table, predicate = []) {
    const cats = [];
    const q = query(collection(db, table), where(predicate[0], predicate[1], predicate[2]));

    const docRefs = await getDocs(q);

    docRefs.forEach(doc => {
        cats.push({...doc.data(), id: doc.id});
    })
    
    return cats;
}

export function InsertCat(table, cat) {
    const { name, collar, colour, sex, adj, date, cattery, location, mother, father } = cat;
    const id = GetCatID(name, date);

    const addCat = async () => {
        const docRef = doc(db, table, id);

        await setDoc(docRef, {});
    
        Object.keys(cat).map(async (key) => {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        });
    };

    useEffect(() => {
        addCat();
    }, []);
}

export function GetCatID(name, date) {
    const id = `${name}${date ? `.${date}` : ``}`;
    
    return id;
}

export function UpdateCats(id, table, field, newValue) {
    const docRef = doc(db, table, id);

    const updateCat = async () => {
        await updateDoc(docRef, {
            [field]: [newValue]
        })
    };

    useEffect(() => {
        updateCat();
    }, []);
}

export async function GetImage(filepath) {
    const storage = getStorage();
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com${filepath}`));

    return url;
}

export async function GetAllImages(filepath) {
    const storage = getStorage();
    const images = [];
    
    const storageRef = await storage.ref().child(filepath).listAll();
    storageRef.map((image) => {
        const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com${image}`));
        images.push(url);
    })
  
    return images;
  }