import {Collaboration, Corporate, Demonstrate, Digital, Diversity, Integrity, Technology,Teamwork} from "../../helpers/helpers"


const experiences = [
  { img:Collaboration,title: 'Integrity', description: 'Displaying the highest level of Integrity in the way we conduct our business' },
  { img:Corporate,title: 'Demonstrate', description: 'Demonstrating a strong Will to Win in the market place' },
  { img:Demonstrate,title: 'Diversity', description: 'Promoting Diversity in the work place and community' },
  { img:Digital,title: 'Teamwork', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A semper aenean id pen' },
  { img:Diversity,title: 'Collaboration', description: 'Harnessing the power of Technology to deliver better customer experience' },
  { img:Integrity,title: 'Technology', description: 'Displaying the highest level of Integrity in the way we conduct our business' },
  { img:Technology,title: 'Corporate', description: 'Setting the standard for the best Corporate Citizenship in the communities we work' },
  { img:Teamwork,title: 'Digital', description: 'Setting the standard for the best Corporate Citizenship in the communities we work' },
  ];


const Cards = () => {
  return (
    <>
            {
                experiences.map((item,index) => (
                  <div key={index} className="flex flex-col justify-center items-center sm:items-start w-[259px] px-10 h-[231px] gap-5 hover:scale-110 transition-all duration-500">
                  <div >
                 <img src={item.img} alt="" />
               </div >
               <h3 className="text-[22px] font-bold text-[#363940]">{item.title}</h3>
               <p className=" text-start text-black/40">{item.description}</p>
               </div>)
                  
                
                )
              }

      
    </>
  )
}

export default Cards
