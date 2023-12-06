import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import Datas from "./Data.json";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

export const Dashboard = () => {
  const totalAmount = Datas.reduce((sum, item) => sum + item.amount, 0);
  const dataTwo = {
    labels: [],
    datasets: [
      {
        data: Datas.map((item) => item.amount),
        backgroundColor: [
          "#B22222",
          "#0A51A4",
          "#A6B222",
          "#068EB9",
          "#046F3C",
          "#B24D22",
        ],
      },
    ],
  };
  const options = {
    cutoutPercentage: 10,
  };
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const { ctx, data } = chart;
      ctx.save();
      ctx.font = "bolder 10px sans-serif";
      ctx.fillStyle = "red";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${totalAmount}`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y
      );
    },
  };
  return (
    <section className="flex flex-col">
      <div className="chart flex justify-between">
        <h1>Expenditure by Categories</h1>
        <form className="flex">
          <input
            type="text"
            className="border-b-2 border-gray-200 w-full"
            placeholder="Name"
          />
          <input type="text" />
        </form>
      </div>
      <div className="flex">
        <div>
          <Doughnut
            data={dataTwo}
            options={options}
            plugins={[textCenter]}
          ></Doughnut>
        </div>
        <div className="flex flex-col justify-center items-center">
          <form>
            <label htmlFor="categories">Select Categories</label>
            <div className="flex relative">
              <input
                type="text"
                className="border-b-2 border-gray-200 w-full"
                placeholder="Name"
              />
              <FaChevronDown className="absolute right-0 mx-0 my-auto" />
            </div>

            {/* <select name="date" id="">
              <option value="one">one</option>
              <option value="one">one</option>
              <option value="one">one</option>
              <option value="one">one</option>
              <option value="one">one</option>
            </select> */}
          </form>
          <div className="grid grid-cols-2 grid-rows-3 gap-4">
            {Datas.map((item) => (
              <div key={item.id} className="flex flex-col bg-[#F5F5F5] border-l-4 border-indigo-500">
                <div className="flex justify-between">
                  <div className="font-normal text-base">{item.title}</div>
                  <div className="bg-[#CFEED5] flex justify-center items-center">
                    <FaArrowUp />
                    {item.percentage}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="italic font-bold text-lg">{item.amount}</div>
                  <div className="text-base font-normal">vs last year</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
