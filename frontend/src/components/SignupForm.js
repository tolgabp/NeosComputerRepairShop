import authStore from "../stores/authStore";
import { useNavigate } from "react-router-dom";
export default function SignupForm() {
    const store = authStore();
    const navigate = useNavigate();

    const handleSignup = async (e) => {

        //Neo is the Secret key that enables user to register as an admin
        if (store.selectedUserType === "Admin" && store.signupForm.secretKey !== "Neo") {
            e.preventDefault();
            alert("Invalid Secret Key");
        } else {
            e.preventDefault();
            await store.signup();
            navigate("/login");
        }


    }
    const handleUserTypeChange = (e) => {
        const userType = e.target.value;
        store.updateSignupForm(e); // Update the signup form in the store
        store.updateSelectedUserType(userType); // Update the selected user type in the store
    };

    return (
        <form onSubmit={handleSignup}>
            <div>Register as
                <input
                    onChange={handleUserTypeChange}
                    value="User"
                    type="radio"
                    name="userType"
                    checked={store.selectedUserType === 'User'}
                />
                User
                <input
                    onChange={handleUserTypeChange}
                    value="Admin"
                    type="radio"
                    name="userType"
                    checked={store.selectedUserType === 'Admin'}
                />
                Admin
            </div>
            {store.selectedUserType === "Admin" ? (
                <div>
                    <label>Secret Key</label>
                    <input
                        onChange={store.updateSignupForm}
                        value={store.signupForm.secretKeyVar}
                        placeholder="Secret Key"
                        type="text"
                        name="secretKey"
                    />
                </div>
            ) : null}
            <input
                onChange={store.updateSignupForm}
                value={store.signupForm.email}
                type="email"
                name="email"
            />

            <input
                onChange={store.updateSignupForm}
                value={store.signupForm.password}
                type="password"
                name="password"
            />
            <button type="submit">Signup</button>
        </form>
    )
}
