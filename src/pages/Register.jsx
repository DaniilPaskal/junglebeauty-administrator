import { useState } from 'react';

const Register = () => {
    const [user, setUser] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const validatePassword = () => {

    }

    const register = () => {
        
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
                    <button type='submit' onClick={handleLogin}>Register</button>
                </div>
            </form>
        </div>
    )
}

export default Login;