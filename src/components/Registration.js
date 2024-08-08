import React, { useState } from 'react';

function Registration() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const createAccount = () => {
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match. Please try again.');
            setPassword('');
            setConfirmPassword('');
        } else {
            setErrorMessage('');
            // Here you would typically send the data to your backend
            console.log('Account created:', username);
            // Reset form or redirect user
        }
    };

    return (
        <div className="form-container">
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
            <input 
                type="password" 
                placeholder="Confirm Password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required 
            />
            <button onClick={createAccount}>Create Account</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
    );
}

export default Registration;