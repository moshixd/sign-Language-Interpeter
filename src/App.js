import "./App.css";
import "animate.css";

import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import TranslationPage from "./views/TranslationPage";
import ProfilePage from "./views/ProfilePage";
import LoginPage from "./views/LoginPage";
import { useEffect, useState } from "react";

import { storageSave, storageRead } from "./utils/storage";
import { STORAGE_KEY_USER } from "./components/const/storageKeys";

function App() {
  const API_URL = process.env.REACT_APP_API_URL;
  const API_KEY = process.env.REACT_APP_API_KEY;
  const NODE_ENV = process.env.REACT_APP_NODE_ENV;
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(storageRead(STORAGE_KEY_USER));

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
  const fetchUser = async (username) => {
    const res = await fetch(API_URL + `?username=${username}`);
    const data = await res.json();

    return data;
  };

  // Add user
  const addUser = async (username) => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
        NODE_ENV: NODE_ENV,
      },
      body: JSON.stringify({
        username,
        translations: [],
      }),
    });

    const data = await res.json();

    setUsers([...users, data]);
  };

  // Delete translations for specific user (Not used)
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

  /**
   * Login
   *
   * @param {*} param0
   */
  const onLogin = async ({ username }) => {
    // fetch username
    let userObj = await fetchUser(username);

    // if user doesn't exist
    if (Object.keys(userObj).length === 0) {
      userObj = await addUser(username);

      setCurrentUser(userObj);

      // if user exist
    } else setCurrentUser(userObj);

    storageSave(STORAGE_KEY_USER, userObj);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/login"
            element={<LoginPage user={currentUser} onLogin={onLogin} />}
          />
          <Route
            path="/translation"
            element={<TranslationPage user={currentUser} />}
          />
          <Route path="/profile" element={<ProfilePage user={currentUser} />} />
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
