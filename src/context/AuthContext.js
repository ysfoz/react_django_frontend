import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

function AuthContextProvider(props) {
  const [postList, setPostList] = useState();
  const [pageCount, setPageCount] = useState();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false)

  const fetchDataList = async (num) => {
    setLoading(true)
    const res = await axios.get("https://blog-backend-ysf.herokuapp.com/list/");
    const items = res?.data;
    const page = res?.data?.filter(
      (item, i) => i + 1 <= 6 * num && i >= (num - 1) * 6
    );
    setLoading(false)
    setPageCount(Math.ceil(items?.length / 6));
    setPostList(num ? page : items);
  };

  const fetchDataLogin = async (path, data) => {
    const res = await axios.post(path, data);
    return res?.data;
  };

  return (
    <AuthContext.Provider
      value={{
        postList,
        setPostList,
        fetchDataList,
        setCurrentUser,
        currentUser,
        fetchDataLogin,
        pageCount,
        loading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
