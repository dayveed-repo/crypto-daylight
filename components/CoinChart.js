import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  LineElement
);

const CoinChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrices = [];
  const coinTimeStamps = [];

  coinHistory.history.forEach((history) => {
    coinPrices.push(history.price);
    coinTimeStamps.push(
      new Date(history.timestamp * 1000).toLocaleDateString()
    );
  });

  const data = {
    labels: coinTimeStamps.reverse(),
    datasets: [
      {
        label: "Price in USD",
        data: coinPrices.reverse(),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="max-w-4xl mt-4 mx-auto md:h-auto w-5/6">
      {coinHistory.history.length ? (
        <Line data={data} options={options} />
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};

export default CoinChart;
