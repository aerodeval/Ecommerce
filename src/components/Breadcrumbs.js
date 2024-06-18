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
    <div >
       <p className="flex">Home/ {crumbs}</p>
    </div>
  )
}
