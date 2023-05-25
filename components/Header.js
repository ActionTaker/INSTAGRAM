import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
}from "@heroicons/react/outline"

import{HomeIcon} from "@heroicons/react/solid"

function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50"> {/* flex 안쓰면 flex w-full 한효과랑 똑같음. flex 를 쓰면 그안에있는 친구들이 컨텐츠 크기만큼 줄어든다*/}
      <div className="flex justify-between items-center max-w-6xl p-4 mx-auto" >
        {/*LEft*/}

        <div className="relative hidden w-20 h-10 cursor-pointer lg:block"> 
          <Image // static 을제외한 다른것을 설정해줘야지 position 하위에서 fill 이 먹힌다.
            src='https://links.papareact.com/ocw'
              fill={true} //x y 최대한 많이쓴다 contain없으면 늘어지거나 찌그러질수있음.. 조상의 static 을제외한 포지션 쓴것을 기준으로 다 채워진다.
              style={{objectFit:"contain"}} // 비율이 바뀌지않는다 
          />
        </div>
        {/* flex-shrink-0  Because flex items are set, by default, to flex-shrink: 1, which means that they can shrink in order to minimize overflow of the container.*/}
        <div className='relative w-10 h-10 flex-shrink-0 cursor-pointer lg:hidden'>  
          <Image
            src='https://links.papareact.com/jjm'
              fill={true} //크기를 설정 크기는 div 전체다..
              style={{objectFit:"contain"}}
          />
        </div>
        {/*middle*/}
        <div className="relative max-w-xs rounded-md"> {/*최대한 다쓰는데 최대 넓이가 정해짐 full 과 max-w 조합*/}
          <div className="absolute inset-y-0 pl-3 flex items-center"> {/*inset 설정전이면 xy 각각 따로 적용된다. 원래 static 자리에 들어가고 부모를 다 못채운다*/}
            <SearchIcon className="h-5 w-5 text-gray-500"/>
          </div>
          <input className='w-40 sm:w-full pl-10 border-2 h-10 hover:border-black focus:border-black rounded-md' type="text" placeholder="Search"/>
        </div>

        {/*right*/}
          <div className="flex justify-end space-x-3 items-center">
            <MenuIcon className="flex-shrink-0 h-6 w-6 md:hidden"/>
            <HomeIcon className="navBtn"/>
            <div className="relative navBtn">
              <PaperAirplaneIcon className="navBtn rotate-45"/>
              <div className="absolute left-2 -top-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse hover:animate-none text-white">3</div>
            </div>
            <PlusCircleIcon className="navBtn"/>
            <UserGroupIcon className="navBtn"/>
            <HeartIcon className="navBtn"/>
            <img
              src="https://i.imgflip.com/5lszpy.png?a467736"
              className="h-10 cursor-pointer rounded-full"
              />
          </div>
            
        
      </div>
    </div>
  )
}

export default Header