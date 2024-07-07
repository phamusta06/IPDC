import CardsResults from "./CardsResults"

const Result = () => {
  return (
    <section id="result">
        <div className="container   max-w-[1200px]">
               <div className="py-20 space-y-14">
                <div className="text-center space-y-7">
                    <h1 className="lg:text-[36px] text-xl font-bold text-black/80 ">
                    Our best results for the year
                    </h1>
                    <p className="text-black/40">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.
                    </p>
                </div>
                <div className=" ">
                <CardsResults/>
                </div>

               </div>

        </div>
      
    </section>
  )
}

export default Result
