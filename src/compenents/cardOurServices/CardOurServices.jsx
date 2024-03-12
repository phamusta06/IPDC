import ourIcon from "../../assets/imgcardOurServices/our.jpg";
const CardOurServices = (props) => {
  return (
    <div className="lg:max-w-[254px] p-0">
      <img src={`${props.cover}`} alt="" className="object-cover h-[365px] rounded-[9px]" />
      <div className="flex justify-between py-2 items-center">
        <p className="max-w-[180px] leading-[26px]">
            {props.title}
        </p>
        
          
          <a href="#"><img src={ourIcon} alt="" className="w-[30px] h-[30px]" /></a>  
        
      </div>
    </div>
  )
}

export default CardOurServices
