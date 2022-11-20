import { Button } from '@mui/material'
import React, { useState } from 'react'
import '../css/login.css'
function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')

    const LogInUser = () => {
        if (userName === 'admin' && password === 'admin') {
            window.location.href = '/fullmap'
        }
        else {
            setErr('Please enter valid username and password!!!')
        }
    }
    return (
        <div className='login'>
            <div className='loginCon'>
                <div className='loginU'>
                    <div className='loginUN'>UserName</div>
                    <input type='text' value={userName} onChange={e => setUserName(e.target.value)} className='loginUI' required />
                </div>
                <div className='loginU'>
                    <div className='loginUN'>Password</div>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} className='loginUI' required />
                </div>

                {err && <div className='errMsg'>{err}</div>}
                <Button className="buttonL" onClick={LogInUser}>Login</Button>
            </div>
        </div>
    )
}

export default Login