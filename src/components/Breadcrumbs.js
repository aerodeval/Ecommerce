import { useLocation } from "react-router-dom";

import React from 'react'
import { Link } from "react-router-dom";
export default function Breadcrumbs() {
    const location=useLocation()
    let currentLocation=""
    const crumbs=location.pathname.split('/').filter(crumb=>crumb !=="").map(crumb=>{
        currentLocation += '/${crumb}'

        return(
            <p className="crumb " key={crumb}>
                <Link to={currentLocation}>{crumb}</Link>

            </p>
        )
    })

  return (
    <div  className="container mt-[80px]">
       <p className="flex"> <span className="text-[#00000078]">Home  </span>  <span className="px-[15px]">/</span>  {crumbs}</p>
    </div>
  )
}
