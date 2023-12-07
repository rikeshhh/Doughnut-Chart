import { FaArrowUp } from "react-icons/fa";
import Datas from "../../Data";

export const DashboarsData = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 max-sm:grid-cols-1 items-center">
    {Datas.map((item) => (
      <div
        key={item.id}
        className={`flex flex-col justify-center py-2 px-4 bg-[#F5F5F5] ${item.borderLeft} w-60 h-[69px] max-sm:w-auto`}
      >
        <div className="flex justify-between items-center ">
          <div className="font-normal text-base">{item.title}</div>
          <div className="bg-[#CFEED5] flex justify-center items-center py-1 px-2 w-16">
            <FaArrowUp />
            {item.percentage}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="italic font-bold text-lg">
            ${item.amount}
          </div>
          <div className="text-base font-normal">vs last year</div>
        </div>
      </div>
    ))}
  </div>
  )
}
