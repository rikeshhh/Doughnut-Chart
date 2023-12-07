import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
ChartJs.register(ArcElement, Tooltip, Legend);
const Doughnuts = (prop) => {
    const totalAmount = prop.reduce((sum, item) => sum + item.amount, 0);
    const dataTwo = {
      labels: [],
      datasets: [
        {
          data: prop.map((item) => item.amount),
  
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
      cutout: 115,
    };
    const textCenter = {
      id: "textCenter",
      beforeDatasetsDraw(chart) {
        const {
          ctx,
          chartArea: { top, width, height },
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
    <Doughnut
              data={dataTwo}
              options={options}
              plugins={[textCenter]}
            ></Doughnut>
  )
}

export default Doughnuts
