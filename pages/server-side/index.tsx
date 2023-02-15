import Link from 'next/link'
import React, { useState } from 'react'

const ServerSide =(props : any)=> {
    // console.log(props.myData , " props")
    // const [blog ,setBlog] = useState(props.myData.quotes)
    const serverData = props.myData.quotes
    // console.log(blog , "blog data")
  return (
<>
<Link href='/get-static' scroll={false}>  <div>hello </div></Link>

<div className='grid grid-cols-1'>
         {
            serverData.map((el:any) => {
                return (
                   <>
                   {el.id}
                   {el.quote}
                   </>
                )
            })
        }
        </div>
        </>    
  )
}
export default ServerSide

export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch("https://dummyjson.com/quotes")
    const myData = await res.json()
  
    // Pass data to the page via props
    return { props: { myData } }
  }
  