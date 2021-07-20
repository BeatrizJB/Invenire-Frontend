import axios from "axios";
const baseURL = `${process.env.REACT_APP_SERVER_HOSTNAME}/api`;

//this piece of url is gonna repeat over and over so just use a const
//to mae it easier, also when u have an official url just change in .env

/* PROJECT ROUTES */

 export const getAllInventories = () => {
   return axios.get(`${baseURL}/home`);
 };

// export const addProject = (project) => {
//   return axios.post(`${baseURL}/projects`, project);
// };

 export const getItem = (itemId) => {
   return axios.get(`${baseURL}/home/${itemId}`);
 };

// export const deleteProject = (projectId) => {
//   return axios.delete(`${baseURL}/projects/${projectId}`);
// };

// export const updateProject = (updatedProject) => {
//   return axios.put(`${baseURL}/projects/${updatedProject.id}`, updatedProject);
// };

// export const uploadFile = (uploadData) => {
//   return axios.post(`${baseURL}/upload`, uploadData);
// };

// AUTH API ROUTES

// export const signup = (user) => {
//   return axios.post(`${baseURL}/signup`, user);
// };

// export const login = (user) => {
//   return axios.post(`${baseURL}/login`, user);
// };

// export const logout = (user) => {
//   return axios.post(`${baseURL}/logout`, user);
// };