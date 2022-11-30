import {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {AuthContext} from './AuthProvider';

export const Login = () => {
    const [user, setUser] = useState('')
    const auth = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        auth.login(user);
        navigate('/profile', {replace: true})
    }
  return (
    <div>
        <label>
            UserName:
            <input type='text' onChange={(e) => setUser(e.target.value)} />
        </label>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
