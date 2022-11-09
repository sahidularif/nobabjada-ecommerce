
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import {isAuth} from './auth'
import { useAuth } from './authProvider';

export default function PrivateOutlet(){
    // const {user} = useAuth()
    let value:any
    const user = localStorage.getItem("user")
    if (user){
        value = JSON.parse(user)
    }

    return user? <Outlet/> : <Navigate to="/login" />
}
