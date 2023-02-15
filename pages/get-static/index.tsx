import Link from 'next/link'
import React, { useState } from 'react'

const ServerSide = ({posts}:any) => {
    // console.log(props.myData.quotes)
    // const [blog, setBlog] = useState(props.post.quotes)
    // console.log(blog, "blog data")
    // console.log(posts , "postsData")
    return (
        <> 
            <div className='grid grid-cols-1 m-10'>
              {
                posts.map( (el :any ) =>{
                    return(
                      <>
                        <Link prefetch={false}  href={`/get-static/${el.id}`}>
                        <div key={el.id}>
                            {el.id}.
                            {el.title}
                            
                        </div>
                        
            </Link></>

                    )
                })
            }
            
            </div>
        </>
    )
}
export default ServerSide


export async function getStaticProps() {
    // Fetch data from external API
    console.log("getstatcit")
    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
// console.log(data ,"abhi wala console")
    // Pass data to the page via props
    return { props: { 
        posts :data.slice()
    } }
    
}
