/* eslint-disable react/no-unescaped-entities */
import { Button, imgFinance } from "../../helpers/helpers"

const Finance = () => {
  return (
 
<section id="finance">
        <div className="relative container mx-auto max-w-[1200px]  lg:h-[610px]">
             <div className="flex lg:flex-row-reverse justify-center flex-col gap-7 ">

             <div className="lg:w-[460px] lg:h-[340px]   pt-10 md:space-y-5 text-center px-2 md:text-start  space-y-5 ">
                <h2 className="font-bold text-black/80 text-2xl sm:text-[32px] tracking-[1px] md:pt-10 ">
                IPDC AT A GLANCE
                </h2>
                <p className="text-black/60">
                IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh                </p>
                <div className="pt-10">
                 <p className="group text-primary flex  cursor-pointer font-semibold"> Read More <img src={Button} alt=""  className="group-hover:ml-2 transition-all duration-700"/></p>
                </div>

             </div>
             <div className="lg:w-1/2 ">
                <img src={imgFinance} alt="" className="lg:absolute lg:top-0 lg:-left-20 w-full lg:w-auto "/>

             </div>
             </div>

        </div>

    </section>
  )
}

export default Finance
