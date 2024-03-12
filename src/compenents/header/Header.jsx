import logo from "../../assets/ipcd.png"
import SearchIcon from "../../assets/search.png"

const Header = () => {
  return (
    <nav className=" flex items-center  justify-between  py-[25px] px-[130px] z-10  overflow-hidden text-center ">
      <div><img src={logo} alt="IPDC logo"  className="w-[109px] h-[53px] cursor-pointer"/>
      </div>
      <div className="flex justify-between ">
        <ul className="flex  sm:space-x-7 w-[700px] tracking-[2px] ">
        <li><a href="" className="">Retail</a><a href=""></a></li>
        <li><a href="">SME</a></li>
        <li><a href="">Corporate</a></li>
        <li><a href="">About Us</a> </li>
        <li><a href="">Covid 19</a> </li>
        <li><a href="">Campgains</a> </li>
        
        </ul>
        
        </div>
        <div className="flex space-x-4 ">
        <div className="flex items-center justify-center p-2">
        <img src={SearchIcon} alt="" className="h-[20.01px] w-[20px] cursor-pointer" />
        </div>
          
          <button className={`bg-[--pink-color] font-normal text-white text-[12px] h-9 w-[108px] font-[Rubik] rounded-md tracking-[2px]`}>
          iSERVICE
    </button>
        </div>
     

    
    </nav>
  )
}

export default Header
