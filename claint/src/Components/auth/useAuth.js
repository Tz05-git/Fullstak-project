

import {useSelector} from "react-redux"
import {jwtDecode} from "jwt-decode"

const useAuth=()=>{
    
    const token=useSelector((state)=>state.auth.token)
    if(!token)
        return [{}]
    console.log("token "+token);
    const obj=jwtDecode(token);
    console.log(obj);
    const {roles,username,email,fullname} =obj;
    
    return [obj]

}

export default useAuth;