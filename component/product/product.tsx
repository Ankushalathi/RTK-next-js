import React, { useState } from 'react'
import { productPropType } from './productPropType'
import { usePostsQuery } from '@/redux/service/api'
import Image from 'next/image'
import {AiOutlineLike} from 'react-icons/ai'

function Product({ title, description, category, thumbnail,brand }: productPropType) {
    const [likeCount, setLikeCount] = useState(0)
    const [dislikeCount, setDislikeCount] = useState(0)
    const [activeBtn, setActiveBtn] = useState("none");

    const { data, error, isFetching, isSuccess, isLoading } = usePostsQuery('')
    // console.log(data, "data from component")

   
    const handleLikeClick = () => {
        if (activeBtn === "none") {
            setLikeCount(likeCount + 1);
            setActiveBtn("like");
            return;
        }

        if (activeBtn === 'like') {
            setLikeCount(likeCount - 1);
            setActiveBtn("none");
            return;
        }

        if (activeBtn === "dislike") {
            setLikeCount(likeCount + 1);
            setDislikeCount(dislikeCount - 1);
            setActiveBtn("like");
        }
    };
   

    return (
        <div>

            {/* <h1>React RTK Query</h1> */}
            {isLoading && <h2>...Loading</h2>}
            {error && <h2>...Something went wrong</h2>}
            {isFetching && <h2>...Fetching</h2>}
            {isSuccess &&
                (
                    <div>
                        <Image width={100} height={100} alt="" src={thumbnail} />
                        <div> {title}
                            <div>
                                {category}
                            </div>
                            <div> ${description}</div>
                            <div> {brand}</div>
                            <div className='flex'>

                            <button className=''
                                onClick={handleLikeClick}
                            >  {likeCount} <AiOutlineLike  size='1.3em'/>
                            </button>

                            </div>

                          
                        </div>
                    
                    </div>
                )}
        </div>
    )
}

export default Product