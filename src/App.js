import "./App.css";
import 'animate.css'

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslationPage from "./views/TranslationPage";
import ProfilePage from "./views/ProfilePage";
import LoginPage from "./views/LoginPage";
import { useEffect, useState } from "react";

function App() {
  // const API_URL = process.env.API_URL;
  // const API_KEY = process.env.API_URL;
  // const NODE_ENV = process.env.API_URL;

  const API_URL =
    "https://sign-language-translation-asl.herokuapp.com/translations/";
  const API_KEY =
    "mcxjgprvtpryfympjuuhmjmzqngrtmkdjkwhwhemmsnyvaanypwjvkuusrsjnveb";
  const NODE_ENV = "production";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUserObjects = async () => {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    };
    getUserObjects();
  }, []);

  // fetch all users
  const fetchUsers = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();

    return data;
  };

  // fetch specific user
  const fetchUser = async (id) => {
    const res = await fetch(API_URL + id);
    const data = await res.json();

    return data;
  };

  // Add user
  const addUser = async (user) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "x-api-key": API_KEY,
        NODE_ENV: NODE_ENV,
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();

    setUsers([...users, data]);
  };

  // Delete translations for specific user
  const deleteTranslations = async (id) => {
    const res = await fetch(API_URL + "/" + id, {
      method: "Patch",
      headers: {
        "x-api-key": API_KEY,
        NODE_ENV: NODE_ENV,
      },
      body: JSON.stringify({ translations: [] }),
    });

    const updatedUser = await res.json();

    // Delete this.user from list and add the new user
    replaceUsersInList(id, updatedUser);
  };

  /**
   * this helper function substitutes user with translations with user without translations
   *
   * @param {*} id id of user with translations
   * @param {*} updatedUser patched user (translations deleted)
   */
  const replaceUsersInList = (id, updatedUser) => {
    // Filters out old user and splices(removes) them from list
    const unChangedUsers = users.splice(users.filter((user) => user.id === id));

    // add
    setUsers(...unChangedUsers, updatedUser);
  };


  const onLogin = (event) => {
    // 1. finns hakim?
    // true: fetchUser(hakim.id)
    // false: addUser(user)
    console.log("logging in");
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage onClick={onLogin} props={{ users }} />}
          />
          <Route path="/translation" element={<TranslationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
        <footer>
          <NavLink to="/login"> login </NavLink>
          <NavLink to="/translation"> translation</NavLink>
          <NavLink to="/profile"> profile</NavLink>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
