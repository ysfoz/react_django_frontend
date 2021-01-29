import axios from "axios";

export const putData = async (path, data) => {
  
  const Token = localStorage.getItem("Token");
  console.log("token", Token);
  const response = await axios.put(path, data, {
    headers: {
      "Authorization": `Token ${Token}`,
    },
  });
  
  return response?.data;
};