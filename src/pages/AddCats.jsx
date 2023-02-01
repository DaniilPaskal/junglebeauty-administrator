import { useState, useContext } from "react";
import CatForm from "../components/CatForm";

const AddCats = () => {
    return (
        <>
            <h2>Add new cat to database:</h2>
            <CatForm />
        </>
    )
}

export default AddCats;