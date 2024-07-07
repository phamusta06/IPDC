
const Newsletter = () => {
  return (
    <section id="newsletter">
      <div className="bg-[#FEF9FC]">
      <div className="container mx-auto max-w-[1200px] ">
           <div className="py-20 text-center space-y-14">
           <div className="space-y-7">
            <h2 className="text-2xl md:text-[36px]  font-bold">
            Newsletter

                        </h2>
                        <h5 className="text-black/40">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.                        </h5>

            </div>
            <form className="flex justify-center gap-3 flex-wrap px-2">
                <input type="text" placeholder="Your email " className="placeholder-black/20 text-[16px] px-3 py-[15px] w-[486px] rounded-md border-black/10 border-[1px] "/>
                <button className="py-4 px-6 bg-primary text-white rounded-md tracking-[1px]">Subscribe</button>
            </form>
           </div>
        </div>

      </div>
      
    </section>
  )
}

export default Newsletter
