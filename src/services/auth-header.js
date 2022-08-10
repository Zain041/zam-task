import axios from 'axios';
const user = JSON.parse(localStorage.getItem('user'))

export default axios.create({
  baseURL: 'https://safetydevapis.safetytracker.be/public/api/',
  headers: { "Authorization": `Bearer ${user ? user.token : ''}`,
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  "Access-Control-Allow-Headers": "Authorization" },
  
});

