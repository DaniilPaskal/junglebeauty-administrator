import { useState } from 'react';

const Accounts = () => {
    const [user, setUser] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const validatePassword = () => {

    }

    const handleRegister = () => {
        
    }

    return (
        <div>
            <form>
                <label>
                    Email:
                    <input name='email' type='email' onChange={handleChange} />
                </label>
                <label>
                    Password:
                    <input name='password' type='password' onChange={handleChange} />
                </label>

                <label>
                    Confirm password:
                    <input name='confirmPassword' type='password' onChange={handleChange} />
                </label>

                <div className='buttons-container'>
                    <button type='submit' onClick={handleRegister}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Accounts;