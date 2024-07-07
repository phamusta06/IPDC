import Cards from "./Cards"

 

const Service = () => {
  return (
    <section id="service">
        <div className="bg-[#FEF9FC] px-8">
            <div className="container mx-auto max-w-[1200px] py-20">
                <div className="space-y-14">
                    <div className="text-center space-y-7">
                        <h2 className="text-2xl md:text-[36px]  font-bold">
                        Our Services

                        </h2>
                        <h5 className="text-black/40">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend
                        </h5>
                    </div>
                    <div className="flex flex-wrap sm:justify-between gap-5 justify-center  ">
                        <Cards/>

                    </div>

                </div>

            </div>
        </div>
      
    </section>
  )
}

export default Service
