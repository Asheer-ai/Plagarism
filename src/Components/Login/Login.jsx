import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure you have a corresponding CSS file for styling

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        
        if (!email || !password) {
            setError('Please fill in all fields.');
            return;
        }

        
        if (email === 'user@example.com' && password === 'password123') {
            setError('');
            navigate('/'); 
        } else {
            setError('Invalid email or password.');
        }
    };

    return (
        <>
        <h1></h1>
        <iframe className='w-[100%] h-[44vw] bg-slate-400' src="https://forms.visme.co/formsPlayer/dm17gr8e-simple-newsletter-subscription" frameborder="0"></iframe>
        </>
    );
}

export default Login;
