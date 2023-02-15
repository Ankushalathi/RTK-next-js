
import React, { useState } from 'react'

const ServerSide = ({ post }: any) => {
    // console.log(props.myData.quotes)
    // const [blog, setBlog] = useState(props.post.quotes)
    // console.log(blog, "blog data")
    // console.log(post, "postData")
    return (
        <>
            <div className='grid grid-cols-1'>
                <h2>
                    {post.id} 😕{post.title}
                </h2>
                <p>{post.body} </p>
            </div>
        </>
    )
}
export default ServerSide

export async function getStaticPaths() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const pathData = await res.json()
    // console.log(pathData, " pathdata")
    const paths = pathData.map( (el :any) => {
        return {
            params: { postId: el.id.toString(), }
        }
    })
    return {
        paths,
        fallback: false
    }
}
// export async function getStaticPaths() {
//     return {
//       paths: [
//         { params: { ... } } // See the "paths" section below
//       ],
//       fallback: true,// See the "fallback" section below
//     };
//   }
  

export async function getStaticProps(context: any) {
    // Fetch data from external API
    const id = context.params.postId
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()

    // Pass data to the page via props
    return {
        props: {
            post: data
        }
    }

}