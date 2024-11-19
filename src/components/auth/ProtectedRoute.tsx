import React from 'react'
import {Navigate } from "react-router-dom";

import { ReactNode } from 'react';

interface Iprops {
  isAllowed:boolean,
  redirected: string,
  childern: ReactNode
}
function ProtectedRoute({isAllowed , redirected , childern}:Iprops) {
   
  if(isAllowed) return childern;
  
    return <Navigate to={redirected} />

  
  
}

export default ProtectedRoute