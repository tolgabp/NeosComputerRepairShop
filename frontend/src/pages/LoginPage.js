import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function LoginPage() {
    return (
        <>
            <Navbar />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(to right, #f2f4f6, #ffffff)' }}>

                <h1 style={{ fontFamily: '"Roboto", sans-serif', marginBottom: '20px' }}>Login</h1>
                <LoginForm />
            </div>
        </>
    )
}
