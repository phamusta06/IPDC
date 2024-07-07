
const results=[
    {title:"57.6 bn",details:"LOAN PORTFOLIO",valid:true},
    {title:"0.95%",details:"CLASSIFIED LOAN PORTFOLIO",valid:false},
    {title:"388.5%",details:"CLASSIFIED LOAN Coverage",valid:false},
    {title:"50.4 bn",details:"Deposit",valid:false},
    {title:"6.1 bn",details:"Shareholders equity",valid:false},
    {title:"18.51%",details:"Capital Adequacy Ratio",valid:false},
    {title:"8.5 bn",details:"Market Capitalization",valid:false},
    {title:"AAA",details:"Credit Rating",valid:false},
]


const CardsResults = () => {
  return (
<div className="grid lg:grid-cols-4 sm:grid-cols-2 text-center space-y-6">
  {
    results.map((res, index) => (
      <div key={index} className="w-full cursor-pointer sm:hover:scale-110 transition-all duration-500 flex justify-center items-center ">
        <div className="mx-auto">
          <div className="w-[176px]">
            <h3 className={`${res.valid ? 'text-primary' : 'text-black'} text-[40px] font-extrabold`}>
              {res.title}
            </h3>
            <h6 className="text-black/60 text-[16px]">
              {res.details}
            </h6>
          </div>
        </div>
      </div>
    ))
  }
</div>

  )
}

export default CardsResults
