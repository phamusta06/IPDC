import { Link } from "react-router-dom";
import { call, facebook, instagram, linkedin, youtube } from "../helpers/helpers";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto max-w-[1200px] py-10">
       <div className="flex  md:justify-between flex-wrap gap-2">
       <div className="flex flex-wrap gap-16 mx-auto md:justify-between items-start justify-center ">
          <div className="w-[180px] space-y-4 ">
            <h3 className="text-[#010101] font-bold ">About the company</h3>
            <p className="text-[13px] text-black/60">
              Learn To Love Growth And Change And You Will Be A Success.
              Microsoft Patch{" "}
            </p>
            <div className="flex gap-3 pt-6">
              <Link to="#">
                {" "}
                <img src={facebook} alt="" />
              </Link>
              <Link to="#">
                {" "}
                <img src={youtube} alt="" />
              </Link>
              <Link to="https://www.linkedin.com/in/mustafa-mansouri-121341311/">
                {" "}
                <img src={linkedin} alt="" />
              </Link>
              <Link to="#">
                {" "}
                <img src={instagram} alt="" />
              </Link>
            </div>
          </div>
          <div className="max-w-[140px] space-y-4">
            <h3 className="text-[#010101] font-bold ">Products</h3>
          <p  className="text-[13px] text-black/60 pr-7 leading-4"> CSR Activitiesp </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"> Green Banking </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"> News </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"> CSR Activitiesp </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"> Ongoing Campgain </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"> Updates </p> 
          </div>
          <div className=" space-y-4">
            <h3 className="  text-[#010101] font-bold ">Get Started </h3>
           <p  className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">Career </Link></p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">Contact Us</Link>  </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline"> Government Securities</Link></p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">Examples</Link>  </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">NIS</Link> </p>
           </div>
        <div className="  space-y-4 max-w-[140px] ">
          <h3 className=" text-[#010101] font-bold ">About </h3>
         <p  className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">IPDC at a Glance </Link></p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">Mission, VIsion & Values</Link>  </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline"> Corporate Governanace</Link></p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">Shareholders</Link>  </p>
           <p className="text-[13px] text-black/60 pr-7 leading-4"><Link className="hover:underline">Investor Relations</Link> </p>
           </div>
          

           
        </div >
          <div className="hidden lg:flex justify-center "><img src={call} alt="" /></div>
       </div>
      
      </div>
    </footer>
  );
};

export default Footer;
