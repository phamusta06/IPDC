import { business_ETV, business_Westin, business_holcim, business_jummit } from "../../helpers/helpers";

const Business = () => {
  return (
    <section id="business">
      <div className="bg-[#FCE0EF]/20 w-full">
        <div className="container mx-auto max-w-[1200px] py-20 space-y-20">
          <h2 className="text-[23px] text-center font-medium tracking-[2.1px]">BUSINESS PARTNERS
</h2>

          <div className="flex flex-wrap justify-center-center sm:justify-between flex-col gap-10 lg:flex-row">
            <img src={business_Westin } alt="" className="hover:scale-110 transition-all duration-500"/>
            <img src={business_jummit} alt=""  className="hover:scale-110 transition-all duration-500"/>
            <img src={business_holcim} alt=""  className="hover:scale-110 transition-all duration-500"/>
            <img src={business_ETV} alt=""     className="hover:scale-110 transition-all duration-500"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
