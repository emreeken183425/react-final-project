import React from 'react'
import {useContext,createContext} from 'react'

// createContext veri oluşturmak için 
const AuthContext=createContext();


// useContext createContext ile oluşturulan veriden bilgi çekmek için 
export function useAuth(){
    return useContext(AuthContext);
}

function AutContextProvider() {
  return (
    <div>
      
    </div>
  )
}

export default AutContextProvider
