import React from "react";
import { Bar } from "react-chartjs-2";

const AffectedGraph = ({ dataArr }) => {
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

  const labels = dataArr ? dataArr.map((item) => item.month) : [];
  const info = dataArr ? dataArr.map((item) => item.total) : [];

  const graphData = {
    labels: labels,
    datasets: [
      {
        label: "Cases",
        data: info,
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return (
    <div data-testid="graph-1">
      <Bar data={graphData} options={options} />
    </div>
  );
};
export default AffectedGraph;
