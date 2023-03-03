import { useEffect, useState } from 'react';
import { collection, doc, query, where, getDocs, addDoc, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { auth, getAuth, signOut, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword,signOut,onAuthStateChanged} from 'firebase/auth';
import { ref, getStorage, getDownloadURL, listAll } from 'firebase/storage';
import { useNavigate } from 'react-router-dom';
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

export function UpdateCat(table, cat) {
    const id = cat.id;

    const updateCat = async () => {
        const docRef = doc(db, table, id);
        
        Object.keys(cat).map(async (key) => {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        });
    };

    useEffect(() => {
        updateCat();
    }, []);
}

export function DeleteCat(table, cat) {
    const id = cat.id;
    
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
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/${filepath}`));

    return url;
}

export async function GetAllImages(filepath) {
    const images = [];
    const storage = getStorage();
    const storageRef = ref(storage, filepath);
    
    const result = await listAll(storageRef);
    
    result.items.forEach(image => {
        images.push(image.fullPath);
    })

    return images;
}

export async function GetList(listName) {
    const storage = getStorage();
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Lists/${listName}`));
    const list = await fetch(url);
    const data = await list.json();

    return data;
}

export async function GetText(textName) {
    const storage = getStorage();
    const url = getDownloadURL(ref(storage, `gs://junglebeauty-fb9a7.appspot.com/Texts/${textName}`));
    const list = await fetch(url);
    const data = await list.json();

    return data;
}

export async function SignIn(email, password) {
    const auth = getAuth();
    return await signInWithEmailAndPassword(auth, email, password);
}

export function handleLogout() {
    const navigate = useNavigate();

    signOut(auth).then(() => {
        navigate('login');
    }).catch((error) => {
        console.error();
    });
}