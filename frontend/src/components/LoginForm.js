import React from 'react'
import { useNavigate } from 'react-router-dom';
import authStore from '../stores/authStore'

export default function LoginForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log("loginForm before request:", store.loginForm);

        try {
            await store.login();

            // Navigate
            if (store.selectedUserType === "Admin") {
                navigate('/adminPage');
            } else {
                navigate("/");
            }
        } catch (error) {
            console.error("Please try again");

        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input
                onChange={store.updateLoginForm} value={store.loginForm.email} type="email"
                name="email"
            />
            <input
                onChange={store.updateLoginForm}
                value={store.loginForm.password}
                type="password"
                name="password"
            />
            <button type="submit">Login</button>
        </form>
    )
}
