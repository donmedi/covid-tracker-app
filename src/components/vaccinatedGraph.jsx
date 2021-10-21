import React from "react";
import { Bar } from "react-chartjs-2";

const VaccinatedGraph = ({ vacData, vacData2, vacLabel }) => {
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

  const labels = vacData.map((item) => item.month);
  const info = vacData.map((item) => item.total);
  const info2 = vacData2.map((item) => item.total);

  const foo = {
    labels: labels,
    datasets: [
      {
        label: vacLabel,
        data: info,
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
    backgroundColor: [
      "rgba(255, 99, 132, 0.2)",
      "rgba(54, 162, 235, 0.2)",
      "rgba(255, 206, 86, 0.2)",
      "rgba(75, 192, 192, 0.2)",
      "rgba(153, 102, 255, 0.2)",
      "rgba(255, 159, 64, 0.2)",
    ],
    borderColor: [
      "rgba(255, 99, 132, 1)",
      "rgba(54, 162, 235, 1)",
      "rgba(255, 206, 86, 1)",
      "rgba(75, 192, 192, 1)",
      "rgba(153, 102, 255, 1)",
      "rgba(255, 159, 64, 1)",
    ],
  };

  const foo2 = {
    labels: labels,
    datasets: [
      {
        label: "Second Dose",
        data: info2,
        backgroundColor: "rgb(54, 162, 235)",
      },
    ],
  };

  return (
    <div>
      {vacLabel === "First Dose" ? (
        <Bar data={foo} options={options} />
      ) : (
        <Bar data={foo2} options={options} />
      )}
    </div>
  );
};

export default VaccinatedGraph;
