import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoutes({token , children}) {

    if(token === null){
        return <Navigate to={'/login'}/>
    }

    return children ;

}

export default ProtectedRoutes
