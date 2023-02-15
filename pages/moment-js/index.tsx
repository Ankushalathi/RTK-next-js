import React, { useState } from 'react'
import moment from 'moment'

const MomentJs = () => {
const [presentTime , setPresentTime] = useState()


    const date = moment().format('MMMM Do YYYY, h:mm:ss a');
    const presentTimes = moment().format('LLLL')
    console.log(date)
  return (
    
    <div className='flex justify-center'>
        <div><div>MomentJs</div>
        <div>{date}</div>
        <div>{presentTimes}</div>
        </div>
    </div>
  )
}

export default MomentJs