import waterFallPlugin from "chartjs-plugin-waterfall";
import customLinesPlugin from "chartjs-plugin-custom-lines";

const ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: "bar",
  plugins: [waterFallPlugin, customLinesPlugin],
  data: {
    datasets: [
      {
        label: "Closing Costs",
        data: [10],
        backgroundColor: "#e8cdd7",
        stack: "stack 1"
      },
      {
        label: "Purchase Price",
        data: [50],
        backgroundColor: "#d29baf",
        stack: "stack 1"
      },
      {
        data: [60],
        waterfall: {
          dummyStack: true
        },
        stack: "stack 2"
      },
      {
        label: "Opening Loan Balance",
        data: [40],
        backgroundColor: "#bb6987",
        stack: "stack 2"
      },
      {
        data: [50],
        waterfall: {
          dummyStack: true
        },
        stack: "stack 3"
      },
      {
        label: "Initial Cash Investment",
        data: [50],
        backgroundColor: "#a53860",
        stack: "stack 3"
      },
      {
        data: [50],
        waterfall: {
          dummyStack: true
        },
        stack: "stack 4"
      },
      {
        label: "Initial Cash Investment",
        data: [20],
        backgroundColor: "#a53860",
        stack: "stack 4"
      },
      {
        label: "Initial Cash Investment",
        data: [70],
        backgroundColor: "#a53860",
        stack: "stack 5"
      }
    ]
  },
  options: {
    plugins: {
      // waterFallPlugin: {
      //   stepLines: {
      //     enabled: true,
      //     startColorStop: 0,
      //     endColorStop: 0.1,
      //     startColor: 'red',
      //     endColor: 'rgba(0, 0, 0, 0)',
      //     // diagonalStepLines: true,
      //   },
      // },
      customLinesPlugin: {
        startColor: `rgba(${0xd2}, ${0x9b}, ${0xaf}, 0.55`,
        endColor: `rgba(${0xd2}, ${0x9b}, ${0xaf}, 0`,
        lines: [
          {
            reverseGradient: false,
            from: {
              stackIndex: 2,
              top: "TR",
              bottom: "BL"
            },
            to: {
              stackIndex: 3,
              top: "TR",
              bottom: "BR"
            }
          }
        ],
        stepLines: {
          enabled: true,
          startColorStop: 0,
          endColorStop: 0.6,
          startColor: "rgba(0, 0, 0, 0.55)", // opaque
          endColor: "rgba(0, 0, 0, 0)" // transparent
        }
      }
    }
  }
});
