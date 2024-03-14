import axios from "axios";
const baseUrl = "https://backend-smartdoors.onrender.com";
export const cerrarPuerta = estado => axios.post(`${baseUrl}/control-led`,estado);
export const abrirPuerta = estado => axios.post(`${baseUrl}/control-led`,estado);