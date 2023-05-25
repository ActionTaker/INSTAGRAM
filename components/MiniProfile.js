import React from 'react'

const datas = [
  {
    id:'123', 
    username:'BELUGA',
    userImg:'https://i.imgflip.com/5lszpy.png?a467736',
    img:'https://i.imgflip.com/5lszpy.png?a467736',
    caption: "SUBSCRIasdfadsfasaasdfasdfasdfasdfasdfasdfsadfsadfasdfasdfdfasdfasdfasdfBE!!!"

  },
  {
    id:'1323', 
    username:'JUHAK',
    userImg:'https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0%2C0%2C600%2C600',
    img:'https://lumiere-a.akamaihd.net/v1/images/c94eed56a5e84479a2939c9172434567c0147d4f.jpeg?region=0%2C0%2C600%2C600',
    caption: "my name is dfaosdkjfndsaoi kjok ok okoko koko"

  } ,
  {
    id:'1234', 
    username:'hello',
    userImg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBl-5FO6cWWxeMXAL87o34Ib50MDpONhpli0N--d-0joulPgNOUXbNckGkYBA2ISDOaU&usqp=CAU',
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqBl-5FO6cWWxeMXAL87o34Ib50MDpONhpli0N--d-0joulPgNOUXbNckGkYBA2ISDOaU&usqp=CAU',
    caption: "SUBSCRIBE!!!"

  } 
]

function MiniProfile() {
  return (
    <div className='ml-10 h-40 border shadow-sm'>
      {/* Header */}
      <div className='flex space-'>
        <img className='w-8 h-8 rounded-full p-[1.5px] border-green-800 border' src={img} alt=""></img> 
      </div>
    </div>
  )
}

export default MiniProfile