import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//this piece of url is gonna repeat over and over so just use a const
//to make it easier, also when u have an official url just change in .env

/* PROJECT ROUTES */

//get allinv + single inv BEGIN

export const myInventories = () => {
  return axios.get(`${baseURL}/myinventories`, { withCredentials: true });
};

export const inventory = (invId) => {
  return axios.get(`${baseURL}/myinventories/${invId}`, {
    withCredentials: true,
  });
};

//get allinv + single inv END

//create inv + item + item specs BEGIN

export const newInventory = (newInv) => {
  return axios.post(`${baseURL}/newinventory`, newInv, {
    withCredentials: true,
  });
};

export const createItem = (invId, item) => {
  return axios.put(`${baseURL}/myinventories/additems/${invId}`, item);
};

export const itemSpecs = (invId, itemId, spec) => {
  return axios.put(
    `${baseURL}/myinventories/${invId}/itemspecs/${itemId}`,
    spec,
    { withCredentials: true }
  );
};

//create inv + item + item specs END

//update inv title BEGIN

export const updateTitle = (invId) => {
  return axios.put(`${baseURL}/myinventories/editinv/${invId}`);
};

//update inv title + item specs END

//delete inv + item specs BEGIN

export const deleteInventory = (invId) => {
  return axios.delete(`${baseURL}/myinventories/deleteinventory/${invId}`);
};

export const deleteItem = (invId, itemId) => {
  return axios.put(`${baseURL}/myinventories/${invId}/removeitem/${itemId}`);
};

//delete inv + item specs END

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
