import { Outlet } from "react-router-dom";
import { LoginComponent } from "../components/LoginComponent";

const useAuth = () => {
    if (localStorage.getItem("id")){
        return true;
    }
    else{
        return false;
    }
}
const ProtectedRoute = ()=>{


    const isAuth = useAuth(); //true or false
    //if isAuth is true then return Outlet else return LoginComponent
    return isAuth ? <Outlet/> : <LoginComponent/>
}
export default ProtectedRoute;