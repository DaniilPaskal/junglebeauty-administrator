import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../firebase';

const Login = () => {
    const [user, setUser] = useState();
    const { email, password } = user;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleLogin = async (event) => {
        event.preventDefault();

        try {
            
        } catch(error) {

        }
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

                <div className='buttons-container'>
                    <button type='submit' onClick={handleLogin}>Log in</button>
                </div>
            </form>
        </div>
    )
}

export default Login;