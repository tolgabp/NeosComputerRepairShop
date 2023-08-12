import SignupForm from "../components/SignupForm";
import Navbar from "../components/Navbar";
export default function SignupPage() {
    return (
        <><Navbar/>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'linear-gradient(to right, #f2f4f6, #ffffff)' }}>
            
            <h1>Signup</h1>
            <SignupForm/>
        </div>
        </>
    );
}
