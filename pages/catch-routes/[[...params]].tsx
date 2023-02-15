import { useRouter } from 'next/router'
import React from 'react'

function CatchRoute() {
   const router = useRouter() 
   const { params } = router.query
  //  console.log(params, "catch route")
   if(params?.length === 2){
    return(
        <h1>View Docs For  {params[0]} and {params[1]}</h1>
    )
   }else if ( params?.length === 1){
    return (
        <h1>View Docs For {params [0]}</h1>
    )
   }
  return (
    <div>View Docs For Main Page</div>
  )
}

export default CatchRoute