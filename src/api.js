import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//this piece of url is gonna repeat over and over so just use a const
//to mae it easier, also when u have an official url just change in .env

/* PROJECT ROUTES */

 export const myInventories = () => {
   return axios.get(`${baseURL}/myinventories`);
 };

  export const inventory = (invId) => {
    return axios.get(`${baseURL}/myinventories/${invId}`);
  };

export const newInventory = () => {
  return axios.post(`${baseURL}/newinventory`);
};

export const updateTitle = (invId) => {
  return axios.put(`${baseURL}/myinventories/${invId}`);
};

export const createItem = (invId) => {
  return axios.put(`${baseURL}/myinventories/addItems/${invId}`);
};

export const editItem = (invId, itemId) => {
  return axios.put(`${baseURL}/myinventories/${invId}/addSpecs/${itemId}`);
};

export const deleteInventory = (invId) => {
  return axios.delete(`${baseURL}/myinventories/deleteinventory/${invId}`);
};



export const uploadFile = (uploadData) => {
  return axios.post(`${baseURL}/upload`, uploadData);
};

// AUTH API ROUTES

export const signup = (user) => {
  return axios.post(`${baseURL}/signup`, user);
};

export const login = (user) => {
  return axios.post(`${baseURL}/login`, user, { withCredentials: true });
};

export const loggedIn = () => {
  return axios.get(`${baseURL}/loggedin`, { withCredentials: true });
};

export const logout = () => {
  return axios.post(`${baseURL}/logout`, null, { withCredentials: true });
};