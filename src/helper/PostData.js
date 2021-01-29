import axios from 'axios'

export const postData = async (path, data) => {
  
  const Token = localStorage.getItem("Token");
  const response = await axios.post(path, data, {
    headers: {
      "Authorization": `Token ${Token}`,
    },
  });

  return response?.data;
};