import familyImg from "../../assets/family.png";
import car from "../../assets/car.png";
import house from "../../assets/house.png";
import telephone from "../../assets/telephone.png";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import more from "../../assets/more.png";
import linkedin from "../../assets/linkedin.png";
import "./container.css"
import {
  Diversity,
  Integrity,
  Demonstrate,
  Teamwork,
  Collaboration,
  Technology,
  Corporate,
  Digital,
} from "../../assets/iconCardExperience/iconCardExperience";
import {
  autoLoan,
  Personal,
  Deposit,
  SAVING,
} from "../../assets/imgcardOurServices/imgOurServices";
import CardExperience from "../cardExperience/CardExperience";
import CardOurServices from "../cardOurServices/CardOurServices";
import { etv, holcim, jummit, westin } from "../../assets/imgBUSINESS/BUSINESS";
import imgIPCD from "../../assets/imgIPCD.png";
import StaticResult from "../staticResult/StaticResult";
import Footer from "../footer/Footer";

const Container = () => {
  return (
    <div className=" ">
      
      <div className="relative Dream mb-36">
        <div className="hidden md:flex justify-end z-0">
          <img
            src={familyImg}
            alt=""
            className="md:absolute md:h-[690px]  md:w-[62%] md:top-28 md:right-0 "
          />
        </div>
        <div className="w-full flex md:justify-center justify-start z-10 ">
          <button className="flex  w-[191px] bg-white h-[71px]  md:justify-center items-center rounded-[55px]   shadow-2xl -mr-5 mt-7 ml-[27px] outline-none ">
            <img src={car} alt="" className="w-[25.54px] mr-4 mr-5 " />
            Car Loans
          </button>
        </div>
        <div className="flex justify-between md:pr-12">
          <div className="md:pl-[135px] space-y-10 max-w-[50%]">
            <h1 className="font-[metropolis-bold] md:max-w-[453px] md:text-[63px] text-[30px] font-extrabold  md:leading-[68px]">
              Chase Your Dream with us
            </h1>
            <p className="md:max-w-[380px]  text-[--gray-color] text-[#010101]">
              The harder you work for something, the greater you’ll feel when
              you achieve it.
            </p>
            <div className="space-x-6 max-w-md ">
              <button
                className={`bg-[--pink-color] text-white font-light h-[46px] w-[157px] font-[Rubik] rounded-md tracking-[2px]`}
              >
                Apply Online
              </button>
              <button className="outline-none border-[1px] border-[--pink-color] w-[188px] px-[20px] h-[46px] rounded-md text-[--pink-color] font-[12px] ">
                Loan Caclulator
              </button>
            </div>
          </div>
         <div>
         <button className="flex  w-[191px] bg-white h-[71px]   justify-center items-center rounded-[55px]  shadow-2xl md:mt-7  mr-3 md:mr-0 md:ml-[27px] outline-none ">
            <img src={house} alt="" className="w-[25.54px] mr-5 " />
            Home Loan
          </button>
         </div>
        </div>
        <div className="pl-[135px]  flex pt-52 space-x-4">
          <img src={telephone} alt="" />
          <p>16519</p>
          <div className="border-l-[1px] h-[24px] text-[--gray-color]"></div>
          <img src={facebook} alt="" />
          <img src={youtube} alt="" />
          <img src={instagram} alt="" />
          <img src={linkedin} alt="" />
        </div>
      </div>

      <div className="  py-24 space-y-24 pb-20 ">
        <div className="flex items-center flex-col space-y-7">
          <h1 className="font-[metropolis-bold] max-w-[820px] text-[36px] font-extrabold leading-[43px] text-[#343434]">
            Creating Extraordinary Customer Experience
          </h1>
          <p className="text-[#999999] max-w-[700px] text-[16px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum eget morbi dignissim eu pharetra consequat montes,
            sagittis.
          </p>
        </div>
        <div className="grid px-12 sm:grid-cols-2 md:grid-cols-3 md:px-20 lg:grid-cols-4 lg:px-28 xl:grid-cols-5 2xl:grid-cols-6 2xl:px-32 gap-14 justify-center">          <CardExperience
            logo={Integrity}
            title={"Integrity"}
            details={
              "Displaying the highest level of Integrity in the way we conduct our business"
            }
          />
          <CardExperience
            logo={Demonstrate}
            title={"Demonstrate"}
            details={"Demonstrating a strong Will to Win in the market place"}
          />
          <CardExperience
            logo={Diversity}
            title={"Diversity"}
            details={"Promoting Diversity in the work place and community"}
          />
          <CardExperience
            logo={Teamwork}
            title={"Teamwork"}
            details={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen"
            }
          />
          <CardExperience
            logo={Collaboration}
            title={"Collaboration"}
            details={
              "Displaying the highest level of Integrity in the way we conduct our business"
            }
          />
          <CardExperience
            logo={Technology}
            title={"Technology"}
            details={
              "Harnessing the power of Technology to deliver better customer experience"
            }
          />
          <CardExperience
            logo={Corporate}
            title={"Corporate"}
            details={
              "Setting the standard for the best Corporate Citizenship in the communities we work"
            }
          />
          <CardExperience
            logo={Digital}
            title={"Digital"}
            details={
              "Setting the standard for the best Corporate Citizenship in the communities we work"
            }
          />
        </div>
      </div>
      <div className="h-auto py-20 space-y-20 bg-[#FCE0EF] bg-opacity-[20%] ">
        <h1 className="opacity-[80%] font-[metropolis] text-[23px] leading-[23px] tracking-[2.1px] text-center text-[#000000]">
          BUSINESS PARTNERS{" "}
        </h1>
        <div className=" flex justify-between pl-[100px] space-x-32">
          <img src={westin} alt="" className="w-[185.71px] h-[110.36px]" />
          <img src={jummit} alt="" className="w-[185.71px] h-[110.36px]" />
          <img src={holcim} alt="" className="w-[185.71px] h-[110.36px]" />
          <img src={etv} alt="" className="w-[185.71px] h-[110.36px]" />
        </div>
      </div>
      <div className="flex space-x-25 ">
      <img src={imgIPCD} alt="" className=" w-[43%] h-[610px] object-cover" />

        <div className="flex flex-col justify-center  px-24">
          <h2 className=" font-[metropolis-bold] text-[32px] leading-[38px]  text-[#363940] pb-4 ">
            IPDC AT A GLANCE
          </h2>
          <p className="max-w-[460px] leading-[29px] text-[#676767] ">
            IPDC Finance Limited (previously known as Industrial Promotion and
            Development Company of Bangladesh Limited) is the first private
            sector financial institution of the country established in 1981 by a
            distinguished group of shareholders namely International Finance
            Corporation (IFC), USA, German Investment and Development Company
            (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED),
            Switzerland, Commonwealth Development Corporation (CDC), UK and the
            Government of Bangladesh
          </p>
          <p className="flex justify-between w-[137.75px] items-center text-[--pink-color] pt-10 text-[19.33px] cursor-pointer" >
            Read More 
           
              <img src={more} alt="" className=" w-[29px] "  />
      
          </p>
        </div>
      </div>
      <div className="bg-[#FEF9FC] flex flex-col justify-center  leading-[50px] py-24 space-y-10 ">
        <div className="text-center">
          <h1 className="font-[metropolis-bold] text-[36px]">Our Services</h1>
          <p className="font-[metropolis] text-[16px] text-[#999999]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam,
            dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>

        <div className="px-[100px]  flex justify-between  space-x-8">
          <CardOurServices cover={SAVING} title="IPDC SAVING SCHEMES" />
          <CardOurServices cover={Personal} title="IPDC SAVING SCHEMES" />
          <CardOurServices cover={Deposit} title="IPDC SAVING SCHEMES" />
          <CardOurServices cover={autoLoan} title="IPDC SAVING SCHEMES" />
        </div>
      </div>
      <div className="py-24 space-y-10">
        <div className="flex flex-col items-center ">
          <h1 className="font-[metropolis-bold] text-[36px]">Our best results for the year</h1>
          <p className="font-[metropolis] text-[16px] text-[#999999] max-w-[610px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-4 content-center gap-14 pl-[100px] ">
          <StaticResult static={<spa className="font-[metropolis-bold] text-[36px] text-[--pink-color]"> 57.6 <span className="font-[metropolis-bold] text-[26px]">bn</span></spa>  } description="LOAN PORTFOLIO" />
          <StaticResult
            static="0.95%"
            description="CLASSIFIED LOAN PORTFOLIO"
          />
          <StaticResult
            static="388.5%"
            description="CLASSIFIED LOAN Coverage"
          />
          <StaticResult static={<spa className="font-[metropolis-bold] text-[36px] "> 50.4 <span className="font-[metropolis-bold] text-[26px]">bn</span></spa>  }
           description="Deposit" />
          <StaticResult static="6.1 bn" description="Shareholders equity" />
          <StaticResult static="18.51%" description="Capital Adequacy Ratio" />
          <StaticResult static="8.5 bn" description="Market Capitalization" />

          <StaticResult static="AAA" description="Credit Rating" />
        </div>
      </div>
      <div className=" space-y-10 py-28 bg-[#FEF9FC] text-center">
        <div className="text-center space-y-4 flex flex-col items-center">
          <h1 className="font-[metropolis-bold] text-[36px] text-[#343434] opacity-[80%]">Newsletter</h1>
          <p className="font-[metropolis] text-[16px] text-[#999999] max-w-[410px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac
            quis aliquam arcu lacus.
          </p>
        </div>
        <div className="flex justify-center space-x-3 ">
          <input
            type="text "
            className="outline-none border-[#CCCCCC] border-[1px] rounded-md h-[46px] w-[343px] p-3 text-[16px] text-opacity-[40%] text-[#999999]"
            placeholder="Your email"
          />

          <button
            className={`bg-[--pink-color] text-white h-[46px] w-[132px] font-[Rubik] rounded-md tracking-[2px]`}
          >
            Subscribe
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Container;
