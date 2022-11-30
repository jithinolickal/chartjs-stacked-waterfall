const ctx = document.getElementById("myChart").getContext("2d");
Chart.defaults.font.size = 8;
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["T1", "L1", "L2", "L3", "L4", "L5", "T1"],
    datasets: [
      {
        label: "L1",
        data: [10, [120, 110], 0, 0, 0, 0, 15],
        backgroundColor: "#233261"
      },
      {
        label: "L2",
        data: [40, 0, [100, 110], 0, 0, 0, 40],
        backgroundColor: "#95d6df"
      },
      {
        label: "L3",
        data: [10, 0, 0, [100, 115], 0, 0, 10],
        backgroundColor: "#7a92a9"
      },
      {
        label: "L4",
        data: [30, 0, 0, 0, [115, 125], 0, 30],
        backgroundColor: "#b9dcc4"
      },
      {
        label: "L5",
        data: [30, 0, 0, 0, 0, [125, 130], 30],
        backgroundColor: "#927ee1"
      }
      // {
      //   label: "total",
      //   type: "line",
      //   pointStyle: "line",
      //   borderDash: [3],
      //   // stepped: true,
      //   data: [120, 120, 110, 115, 125, 130, 120],
      //   backgroundColor: "black"
      // }
    ]
  },
  options: {
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: "X-Axis"
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Y-Axis"
        }
      }
    }
  }
});
