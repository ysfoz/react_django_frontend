import axios from "axios";

export const postData = async (path, data) => {
  const response = await axios.post(path, data);

  return response?.data;
};

export const postDataWithToken = async (path, data) => {
  const Token = localStorage.getItem("Token");
  const response = await axios.post(path, data, {
    headers: {
      Authorization: `Token ${Token}`,
    },
  });

  return response?.data;
};

export const putDataWithToken = async (path, data) => {
  const Token = localStorage.getItem("Token");
  console.log("token", Token);
  const response = await axios.put(path, data, {
    headers: {
      Authorization: `Token ${Token}`,
    },
  });

  return response?.data;
};
