import React from 'react'

function Story({img, username}) {
  return (
    <div className=''>
        <img className='w-14 h-14 rounded-full p-[1.5px] border-red-500 border-2 hover:scale-110 transition-all duration-200 ease-out' src={img} alt=""></img>  {/* img p 둘다 W-14인것이 핵심이다 */}
        <p className='text-xs w-14 truncate text-center'>{username}</p>
    </div>
  )
}

export default Story