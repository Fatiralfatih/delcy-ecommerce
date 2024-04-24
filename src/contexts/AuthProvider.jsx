import { element } from "prop-types";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  authedUser: null,
  addAuthedUser: () => {},
  removeAuthedUser: () => {},
});

const AuthProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(
    JSON.parse(localStorage.getItem("authedUser")) || null
  );

  const addAuthedUser = (authedUser) => {
    localStorage.setItem("authedUser", JSON.stringify(authedUser));
    setAuthedUser(authedUser);
  };

  const removeAuthedUser = () => {
    localStorage.removeItem("authedUser");
    setAuthedUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authedUser,
        addAuthedUser,
        removeAuthedUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuthenticated = () => useContext(AuthContext);

// eslint-disable-next-line react-refresh/only-export-components
export { useAuthenticated, AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: element,
};
