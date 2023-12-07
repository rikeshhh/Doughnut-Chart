import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);
import { Doughnut } from "react-chartjs-2";
import Datas from "./Data";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import Receipt from "./assets/Receipt.png";
export const Dashboard = (prop) => {
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
  console.log(Datas);
  const options = {
    cutout: 115,
  };
  const textCenter = {
    id: "textCenter",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { top, bottom, left, right, width, height },
      } = chart;
      const fontHeight = 16;
      const amountHeight = 30;
      ctx.save();
      ctx.font = `normal ${fontHeight}px Barlow Condensed`;
      ctx.fillStyle = "rgba(99, 105, 105, 1)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("Total Saving", width / 2, height / 2 + top - 46);
      ctx.restore();

      ctx.font = `bolder ${amountHeight}px Barlow Condensed`;
      ctx.fillStyle = "rgba(15, 16, 16, 1)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(`${"$" + "" + totalAmount}`, width / 2, height / 2 + top);

      ctx.restore();
      ctx.font = `normal ${fontHeight}px Barlow Condensed`;
      ctx.fillStyle = "rgba(0, 146, 207, 1)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        "Reached 50% of credit limit",
        width / 2,
        height / 2 + top + 48
      );
    },
  };

  return (
    <section className="main-container">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex justify-start items-center gap-2 text-2xl font-bold italic">
          <figure className="bg-[#E6F4FA] p-2">
            <img src={Receipt} alt="" className="z-50" />
          </figure>
          <h1>Expenditure by {prop.header}</h1>
        </div>
        <div className="flex max-sm:flex-col">
          <div className="w-96 px-11 mx-auto my-0">
            <Doughnut
              data={dataTwo}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <form className="w-full">
              <label htmlFor="categories" className="font-normal text-base">
                Select Categories
              </label>
              <div className="flex relative items-center border">
                <input
                  type="text"
                  className="w-full py-2 px-3 font-normal text-base"
                  placeholder="Select"
                />
                <FaChevronDown className="absolute right-3 mx-0 my-auto " />
              </div>
            </form>
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
          </div>
        </div>
      </div>
    </section>
  );
};
