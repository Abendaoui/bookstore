import { createContext, useContext } from "react";
import { useState } from "react";
const StateContext = createContext({
    user: null,
    token: null,
    adminToken: null,
    setToken: () => {},
    setUser: () => {},
    setAdminToken: () => {},
    
});

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
    const [adminToken, _setAdminToken] = useState(
        localStorage.getItem("ADMIN_TOKEN")
    );
    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };
    const setAdminToken = (adminToken) => {
        _setAdminToken(adminToken);
        if (adminToken) {
            localStorage.setItem("ADMIN_TOKEN", adminToken);
        } else {
            localStorage.removeItem("ADMIN_TOKEN");
        }
    };
    const value = {
        user,
        token,
        adminToken,
        setUser,
        setToken,
        setAdminToken,
    };
    return (
        <StateContext.Provider value={value}>{children}</StateContext.Provider>
    );
};
export default ContextProvider;
export const useStateContext = () => useContext(StateContext);
