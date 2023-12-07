import { FaChevronDown } from "react-icons/fa";
import Datas from "../Data";
import Receipt from "../assets/Receipt.png";
import { DashboarsData } from "./Component/DashboarsData";
import Doughnuts from "./Component/Doughnut";
export const Dashboard = (prop) => {
  return (
    <section className="main-container flex flex-col gap-6 w-full">
      <div className="flex justify-start items-center gap-2 text-2xl font-bold italic">
        <figure className="bg-[#E6F4FA] p-2">
          <img src={Receipt} alt="" className="z-50" />
        </figure>
        <h1>Expenditure by {prop.header}</h1>
      </div>
      <div className="flex max-sm:flex-col">
        <div className="w-96 px-11 mx-auto my-0">
          <Doughnuts />
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <form className="w-full">
            <label htmlFor="categories" className="font-normal text-base">
              Select Categories
            </label>
            <div className="flex relative items-center border">
              {/* <input
                type="text"
                className="w-full py-2 px-3 font-normal text-base"
                placeholder="Select"
              />
              <FaChevronDown className="absolute right-3 mx-0 my-auto " /> */}
            <select name="" id="" className="w-full py-2 px-3 font-normal text-base">
{Datas.map((item)=>(
  <option value={item.title}>{item.title}</option>
))}
            </select>
            </div>
          </form>
          <DashboarsData />
        </div>
      </div>
    </section>
  );
};
