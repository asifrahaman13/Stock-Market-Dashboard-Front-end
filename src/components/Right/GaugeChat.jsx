import React from "react";
import { Chart } from "chart.js";

const GaugeChat = () => {
  var options = {
    type: "doughnut",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
          ],
        },
      ],
    },
    options: {
      rotation: 270, // start angle in degrees
      circumference: 180, // sweep angle in degrees
    },
  };

  var ctx = document.getElementById("chartJSContainer").getContext("2d");
  new Chart(ctx, options);

  return (
    <>
      <gauge-container>
        <canvas id="chartJSContainer" width="600" height="400"></canvas>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.5.1/chart.js"></script>
      </gauge-container>
    </>
  );
};

export default GaugeChat;
