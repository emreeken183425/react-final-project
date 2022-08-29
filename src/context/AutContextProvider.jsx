import React from 'react'
import {useContext,createContext} from 'react'
import { auth,googleProvider } from '../utils/firebaseUtill';
// createContext veri oluşturmak için 
const AuthContext=createContext();


// useContext createContext ile oluşturulan veriden bilgi çekmek için 
export function useAuth(){
    return useContext(AuthContext);
}

function AutContextProvider() {
    function signup(email,password){
    return auth.createUserWithEmailAndPassword(email,password);
}
function login(email,password){
    return auth.createUserWithEmailAndPassword(email,password);
}
  return (
    <div>
      
    </div>
  )
}

export default AutContextProvider
