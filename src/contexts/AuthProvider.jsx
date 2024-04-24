import { element } from "prop-types";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  authedUser: null,
  addAuthedUser: () => {},
  removeAuthedUser: () => {},
  initialize: null,
});

const AuthProvider = ({ children }) => {
  const [authedUser, setAuthedUser] = useState(
    JSON.parse(localStorage.getItem("authedUser")) || null
  );
  const [initialize] = useState(true);

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
        initialize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuthenticated() {
  const context = useContext(AuthContext);
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { useAuthenticated, AuthContext, AuthProvider };

AuthProvider.propTypes = {
  children: element,
};
