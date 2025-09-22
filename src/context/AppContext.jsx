import { createContext, useState } from "react";

export const AppContent = createContext();

export const AppContextProvider = (props) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLogin, setlsLogin] = useState(false);
  const [userData, setData] = useState(null); // null instead of false

  const value = {
    backendUrl,
    isLogin,
    setlsLogin,
    userData,
    setData,
  };

  return (
    <AppContent.Provider value={value}>
      {props.children}
    </AppContent.Provider>
  );
};
