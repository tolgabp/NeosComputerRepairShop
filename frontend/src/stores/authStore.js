import { create } from 'zustand';
import axios from 'axios';

const authStore = create((set) => ({

    loggedIn: null,
    selectedUserType: '',

    //state for login form data
    loginForm: {
        email: '',
        password: '',
        userType: '',
        secretKey: '',
    },
    // State for signup form data
    signupForm: {
        email: '',
        password: '',
        userType: '',
        secretKey: '',
    },

    // Update the login form data based on input changes
    updateLoginForm: (e) => {
        const { name, value } = e.target

        set(state => {
            return {
                loginForm: {
                    ...state.loginForm,
                    [name]: value,
                },

            }
        })
    },

    // Update the signup form data based on input changes
    updateSignupForm: (e) => {
        const { name, value } = e.target

        set(state => {
            return {
                signupForm: {
                    ...state.signupForm,
                    [name]: value,
                },

            }
        })
    },

    // Update the selected user type
    updateSelectedUserType: (userType) => {
        set({ selectedUserType: userType });
    },

    //user login
    login: async () => {
        const { loginForm } = authStore.getState();

        const res = await axios.post('/login', loginForm);

        console.log("Response from login:", res.data);

        set({
            loggedIn: true,
            selectedUserType: res.data.userType,
            loginForm: {
                email: '',
                password: '',
                userType: '',
                secretKey: '',
            },
        });
    },

    //checks user authentication
    checkAuth: async () => {
        try {
            await axios.get('/check-auth');
            set({ loggedIn: true });
        } catch (err) {
            set({ loggedIn: false });
        }
    },

    //perform signup
    signup: async () => {
        const { signupForm } = authStore.getState();

        const res = await axios.post('/signup', signupForm, {
            withCredentials: true,
        });

        set({
            signupForm: {
                email: '',
                password: '',
                userType: '',
                secretKey: '',
            },
        });

        console.log(res);
    },

    //perform user logout
    logout: async () => {
        await axios.get("/logout");

        set({ loggedIn: false });
    }
}));

export default authStore;