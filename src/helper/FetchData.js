import axios from "axios";

export const postData = async (path, data) => {
  try {
    const response = await axios.post(path, data);

    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const postDataWithToken = async (path, data) => {
  try {
    const Token = localStorage.getItem("Token");
    const response = await axios.post(path, data, {
      headers: {
        Authorization: `Token ${Token}`,
      },
    });

    return response?.data;
  } catch (error) {
    console.error(error);
  }
};

export const putDataWithToken = async (path, data) => {
  try {
    const Token = localStorage.getItem("Token");
    console.log("token", Token);
    const response = await axios.put(path, data, {
      headers: {
        Authorization: `Token ${Token}`,
      },
    });
    return response?.data;
  } catch (error) {
    console.error(error);
  }
};


export const postDatalike = async (path,data) => {
  try {
    const Token = localStorage.getItem("Token");
    const response = await axios.post(path, data, {
      headers: {
        'Authorization': `Token ${Token}`,
      },
    });

    return response?.status
  } catch (error) {
    console.error(error);
  }
};