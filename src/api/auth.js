import axios from "axios";
const baseUrl = "https://backend-smartdoors.onrender.com/api"
export const registrar = usuario => axios.post(`${baseUrl}/cliente/registrar`,usuario);
export const loginRes = usuario => axios.post(`${baseUrl}/cliente/login`,usuario);
export const cerrarSesion = () => axios.get(`${baseUrl}/cliente/signout`);

