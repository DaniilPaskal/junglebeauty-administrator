import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState();

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