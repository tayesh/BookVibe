import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";



const useAdmin = () => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin,setIsAdmin]=useState(false);
        
        if(user){
            if(user.uid=="303VgidcxdbxSRBkaBjlmybitAN2"){
                setIsAdmin(true)
            }
        }

    return isAdmin;
};

export default useAdmin;