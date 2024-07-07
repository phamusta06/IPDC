import Cards from "./Cards"

const Experience = () => {

  return (
    <>
        <div className="container  max-w-[1200px]  mx-auto  py-20 flex flex-col">
            <div className="mx-auto space-y-7">
                <h2 className="lg:text-[36px] text-black/80 font-extrabold lg:text-5xltext-5xl text-center gap-5">
                Creating Extraordinary Customer Experience

                </h2>
                <h5 className="text-black/40  lg:tex-[16px] md:w-[660px] mx-auto  text-center w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis
                </h5>
                <div className="flex flex-wrap justify-center lg:justify-between gap-10  lg:gap-12 lg:pt-20">
             
             <Cards/>                  
              </div>
            </div>
            {/* cards Exprrience */}
           
        </div>
      
    </>
  )
}

export default Experience
