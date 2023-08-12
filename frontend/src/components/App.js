import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import BookingsPage from "../pages/BookingsPage";
import HomePage from "../pages/HomePage";
import AdminPage from "../pages/AdminPage";
import AddPartPage from "../pages/AddPartPage";


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={
            <RequireAuth>
              <BookingsPage />
            </RequireAuth>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/parts" element={<AddPartPage />} />
        </Routes>
      </BrowserRouter>

    </div>);
}

export default App;
