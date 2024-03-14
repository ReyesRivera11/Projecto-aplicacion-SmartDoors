import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const  useAuth = () => {
    const contexto = useContext(AuthContext);
    if(!contexto) {
        throw new Error("useAuth debe ser utilizado con un AuthProvider");
    }
    return contexto;
};


export const AuthProvider = ({children}) => {
    const [usuario,setUsuario] = useState();
    const [autenticado,setAutenticado] = useState(false);
    useEffect(()=>{
        AsyncStorage.getItem('usuario')
          .then(storedDataString => {
            const storedData = JSON.parse(storedDataString);
            if(storedData){
              setUsuario(storedData);
              setAutenticado(true);
            }else{
              setUsuario(null);
              setAutenticado(false);
            }
    
          })
          .catch(error => {
            setUsuario(null);
            console.log('Error al recuperar datos:', error);
          }); 
    },[]);
    return (
        <AuthContext.Provider
        value={{
            setUsuario,
            setAutenticado,
            usuario,
            autenticado
        }}
        >
            {children}
        </AuthContext.Provider>
    )

}