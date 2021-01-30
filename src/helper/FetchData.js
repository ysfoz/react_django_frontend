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

export const fetchDataDetail = async (slug) => {
  const Token= localStorage.getItem("Token")
 if (Token){
     const res = await axios.get(`https://blog-backend-ysf.herokuapp.com/${slug}/detail`,{
     headers: {
       "Authorization": `Token ${Token}`,
     }
   })
   return res?.data
 }else{
   const res = await axios.get(`https://blog-backend-ysf.herokuapp.com/${slug}/detail`)
   return res?.data
 }

}

export async function fetchDataList(data) {
  try {
    const results = await axios.get(
      "https://blog-backend-ysf.herokuapp.com/list/",data);
    return results?.data
  } catch (error) {
    console.error(error);
  }
}