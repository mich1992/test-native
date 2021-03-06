import React, { useState, useEffect } from 'react'
import { onAuthStateChanged, getAuth } from "firebase/auth"
import UserGuest from './screenChilds/UserGuest'
import UserLogged from './screenChilds/UserLogged'
import Loading from '../../components/Loading'

export default function Account() {
    const [login, setLogin] = useState(null);
    const auth = getAuth();
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            !user ? setLogin(false) : setLogin(true)
            
        });
    }, [])
    if(login === null) return <Loading text={"Cargando"} Isvisibe={true}/>
    
 

    return login ? <UserLogged/> : <UserGuest/>
}