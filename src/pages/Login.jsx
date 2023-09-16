import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Login = () => {
    const [user, setUser] = useState({email: '', password: ''});
    const { email, password } = user;
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error.code);
            })
    }

    return (
        <div className='page-background'>
            <div className='form-container'>
                <form>
                    <label className='form-label'>
                        Email:
                        <br />
                        <input name='email' type='email' onChange={handleChange} />
                    </label>
                    <br />
                    <label className='form-label'>
                        Password:
                        <br />
                        <input name='password' type='password' onChange={handleChange} />
                    </label>

                    <div className='buttons-container'>
                        <button type='submit' onClick={handleLogin}>Log in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;