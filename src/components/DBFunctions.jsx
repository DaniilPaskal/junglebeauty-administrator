import { useEffect, useState } from 'react';
import { collection, doc, query, getDocs, addDoc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

export function QueryCats(table, predicate) {
    const [cats, setCats] = useState();
    const attributes = {name:'', collar:'', colour:'', date:'', adj:'', sex:'', father:'', mother:''};
    const q = query(collection(db, table));
    
    const fetchCats = async () => {
        await getDocs(collection(db, table))
            .then((querySnapshot)=>{
                const fetchedData = querySnapshot.docs.map((doc) => ({
                    ...doc.data(), id:doc.id
                }))
                setCats(fetchedData);
            }).then((cats) => {
                console.log(cats);
                return cats;
            });
    };

    useEffect(()=>{
        fetchCats();
    }, []);
}

export function InsertCat(table, cat) {
    const { name, collar, colour, sex, adj, date, cattery, location, mother, father } = cat;
    var id = name;

    if (date) {
        id = id + '.' + date;
    }

    const addCat = async () => {
        const docRef = doc(db, table, id);

        await setDoc(docRef, {});
    
        Object.keys(cat).map(async (key) => {
            await updateDoc(docRef, {
                [key]: cat[key]
            })
        });
    };

    useEffect(()=>{
        addCat();
    }, []);
}