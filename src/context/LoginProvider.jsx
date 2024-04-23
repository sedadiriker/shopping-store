import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginContext = createContext();

const LoginProvider =({children}) => {
  const [user, setUser] = useState()
  const navigate = useNavigate()

  const login = (info) => {
    setUser(info)
    navigate("/home")
  }
  return (
    <LoginContext.Provider value={{user,login}}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginProvider

export const useLoginContext = () => {
  return useContext(LoginContext)
}
