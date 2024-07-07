import { Link } from "react-router-dom";
import { button_house, call, car_button, facebook, family, instagram, linkedin, youtube } from "../../helpers/helpers";
 
const Dream = () => {
  return (
    <section id="Dream">
      <div className="relative container  max-w-[1200px]  mx-auto  after:content-[''] after:absolute after:w-[710px] after:h-[670px] after:bg-secondary after:-top-24 after:-right-24 after:-z-20 after:hidden after:lg:flex">
        {/* button loans */}
        <div className="relative flex pt-4 lg:pt-10 sm:flex-row w-full font-semibold justify-center  flex-col  gap-4 sm:justify-between sm:px-28 ">
          <button className="lg:absolute lg:mx-[370px]  lg:px-9  lg:top-16 lg:shadow-2xl flex justify-center items-center p-5 hover:bg-secondary  shadow-xl hover:border hover:border-primary bg-white mx-3 gap-3  rounded-xl sm:rounded-full">
            <img src={car_button} alt="" />
            <p className=""> Car Loans</p>
          </button>
          <button className="flex justify-center items-center  lg:-right-8 hover:bg-secondary hover:border hover:border-primary lg:px-8 lg:top-40 bg-white  lg:shadow-xl p-5 lg:absolute shadow-md mx-3 gap-3  rounded-xl  sm:rounded-full">
            <img src={button_house} alt="" className="inline" />
            Home Loans
          </button>
        </div>
        {/* end button loans */}
        <div className="flex  lg:h-full  flex-col text-center mx-3 lg:pt-4  lg:w-1/2 lg:justify-start lg:text-start md:px-10 ">
          <div className="lg:w-[400px] flex flex-col justify-start items-start my-4 lg:my-32 gap-8">
            <h1 className="font-extrabold text-5xl ">
              
              Chase Your Dream with us
            </h1>
            <h4 className="text-black/60 lg:w-[340px] lg:text-start md:text-center w-full ">
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </h4>
           <div className="flex flex-col lg:flex-row w-full gap-3 text-[12px] font-semibold tracking-wider ">
           <button className=" bg-primary p-3 text-white lg:px-6 rounded-md rounde-md hover:bg-primary/80">
           APPLY ONLINE
            </button>
            <button className="border-primary border text-primary lg:px-14 p-3 rounded-md  hover:bg-secondary hover:text-white ">
            LOAN CACLULATOR
            </button>
           </div>
           <div className="hidden lg:flex lg:mt-32 gap-3">
            <Link to=""> <img src={call} alt="" className="border-r-[1px] border-black/30 pr-3" /></Link>
            <Link to="#">  <img src={facebook} alt="" /></Link>
            <Link to="#">  <img src={youtube} alt="" /></Link>
            <Link to="https://www.linkedin.com/in/mustafa-mansouri-121341311/"> <img src={linkedin} alt="" /></Link>
            <Link to="#">  <img src={instagram} alt="" /></Link>
           
          
          
           
            
           </div>
          </div>
        </div>
        <div className=" w-full">
          <img
            src={family}
            className="lg:absolute lg:-right-24 lg:top-[30px] lg:-z-10  "
          />
        </div>
      </div>
    </section>
  );
};

export default Dream;
