import Head from 'next/head'
import { Carter_One, Inter } from '@next/font/google'
import { useDeleteProductMutation, usePostsQuery, useUpdateProductMutation } from '@/redux/service/api'
import { useEffect, useState } from 'react'
// import Product from '@/component/product/product'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

const DynamicHeader = dynamic(() => import('@/component/product/product'), {
  loading: () =><>data is isLoading</>
})


export default function Home() {

  const [addCart, setAddCart] = useState<any>([])

  const { data, error, isFetching, isSuccess, isLoading } = usePostsQuery('')
  // const [deleteProduct] = useDeleteProductMutation({})
  // const [updateProduct] = useUpdateProductMutation({})
  // console.log( updateProduct, "update")

  // console.log(data, "data from aPI")

  // const clickToCart = ()=>{
  //   console.log(addCart)
  //   return(
  //     setAddCart(addCart+1)
  //   )
  // }

  useEffect(() => {
    // console.log(addCart)
  }, [addCart])

  // const deleteClick = (id: number | string) => {
  //   deleteProduct(id).then((response) => {
  //     console.log(response)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // }

  return (
    <>
<div>
<Link  prefetch={false} href="/server-side"> <button className='ml-8 mt-8'> go to server side</button> </Link>
</div>
      <div className="">

        {/* <DynamicHeader  /> */}
        {/* <h1>React RTK Query</h1> */}
        {isLoading && <h2>...Loading</h2>}
        {error && <h2>...Something went wrong</h2>}
        {isFetching && <h2>...Fetching</h2>}
        {isSuccess &&
          (
            <div className='grid grid-cols-5 gap-10 p-10 border-bg-red-500'>
              {
                data.products.map((el:any) => {
                  return (
                    <div key={el.id}>

                      <DynamicHeader
                        thumbnail={el.thumbnail}
                        title={el.title}
                        description={el.price}
                        category={el.category}
                        brand={el.brand}
                      />
                      <button className='bg-sky-200 p-1 px-3' onClick={() => {
                        // setAddCart(pre=>[[...pre , el]])
                        // addCart.push(el)
                        console.log(el)
                        setAddCart((pre :any)  => [...pre, el])
                      }}>ADD TO CART</button>
                      {/* <button className='bg-sky-200 p-1 px-3' onClick={()=>{
                        deleteClick(el.id)
                      }}>Delete To Cart</button> */}

                    </div>
                  )
                })
              }
            </div>
          )
        }
      </div>
      <div className='grid grid-cols-2 p-6 bg-sky-200'>

        {
          addCart.map((el :any) => {
            return (
              <div key={el.id}>
                <DynamicHeader
                  thumbnail={el.thumbnail}
                  title={el.title}
                  description={el.price}
                  category={el.category}
                  brand={el.brand}

                />
              </div>
            )
          })
        }
      </div>
    </>
  )
}
