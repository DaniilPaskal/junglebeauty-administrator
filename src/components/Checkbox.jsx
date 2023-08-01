import { useState } from "react";

const Checkbox = ({ label, name, value, handleChange, checked }) => {
    return (
        <label>
            {`${label}: `}
            <input type='checkbox' className='checkbox' name={name} value={value} checked={checked} onChange={handleChange} />
        </label>
    )
}

export default Checkbox;