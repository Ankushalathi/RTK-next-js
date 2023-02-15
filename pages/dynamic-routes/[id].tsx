import { useRouter } from 'next/router'
import React from 'react'

function DynamicRoutesId() {
   const router = useRouter()
   const productId = router.query.id
  return (
    <>
    <div className='m-10'>Dynamic Routes Id</div>
    <div  className='m-10'> Details about product {productId}</div>
    </>
  )
}

export default DynamicRoutesId