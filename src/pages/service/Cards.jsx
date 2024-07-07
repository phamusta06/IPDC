import {
  Arrow,
  Image_1,
  Image_2,
  Image_3,
  Image_4,
} from "../../helpers/helpers";

const services = [
  { img: Image_1, title: "IPDC SAVING SCHEMES", icon: Arrow },
  { img: Image_2, title: "IPDC PERSONAL LOAN", icon: Arrow },
  { img: Image_3, title: "IPDC DEPOSIT SCHEMES", icon: Arrow },
  { img: Image_4, title: "IPDC AUTO LOAN", icon: Arrow },
];

const Cards = () => {
  return (
    <>
      {services.map((item, index) => (
        <div key={index} className="cursor-pointer">
          <img
            src={item.img}
            alt=""
            className="hover:scale-110  transition-all duration-500 "
          />
          <div className="py-7 flex justify-between items-center ">
            <h2 className="font-bold text-[21px] w-[195px]">{item.title}</h2>
            <img src={item.icon} alt="" />
          </div>
        </div>
      ))}
    </>
  );
};

export default Cards;
