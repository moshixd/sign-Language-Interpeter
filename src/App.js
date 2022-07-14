import "./App.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslationPage from "./components/TranslationPage";
import ProfilePage from "./components/ProfilePage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <footer>
          <NavLink to="/login"> login</NavLink>
          <NavLink to="/translation"> translation</NavLink>
          <NavLink to="/profile"> profile</NavLink>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
