import axios from "axios";


export const fetchData = async (path, data) => {
  
  
  const response = await axios.post(path, data)
 
  return response?.data;
};