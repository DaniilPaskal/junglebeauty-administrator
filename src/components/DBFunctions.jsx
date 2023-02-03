import { useEffect, useState } from 'react';
import { collection, doc, query, where, getDocs, addDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, getStorage, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';

export async function QueryCats(table, predicate = []) {
    const cats = [];
    var q;

    if (predicate.length == 0) {
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

export function UpdateCat(table, oldCat, newCat) {
    const id = GetCatID(oldCat.name, oldCat.date);

    const updateCat = async () => {
        const docRef = doc(db, table, id);
        
        Object.keys(newCat).map(async (key) => {
            await updateDoc(docRef, {
                [key]: newCat[key]
            })
        });
    };

    useEffect(() => {
        updateCat();
    }, []);
}

export function DeleteCat(table, name, date) {
    const id = 0;
    
    const deleteCat = async () => {
        await deleteDoc(doc(db, table, id));
    };

    useEffect(() => {
        deleteCat();
    }, []);
}

export function GetCatID(name, date) {
    const id = `${name}${date ? `.${date}` : ``}`;
    
    return id;
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