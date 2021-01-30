import { createContext, useState } from "react";
import axios from "axios"; 



export const AuthContext = createContext();


function AuthContextProvider(props) {
  const [postList, setPostList] = useState();
  // const [currentUser, setCurrentUser] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const fetchDataList = async (data) => {
    const res = await axios.get('https://blog-backend-ysf.herokuapp.com/list/', data)
    return res?.data
  }

  const fetchDataLogin = async (path, data) => {
    const res = await axios.post(path, data)
    return res?.data
  }


  
  return (
    <AuthContext.Provider value={{ postList, setPostList, fetchDataList, setCurrentUser, currentUser, fetchDataLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;