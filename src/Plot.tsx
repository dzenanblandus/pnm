import functionPlot from "function-plot";

export const PlotGraph = () =>{

functionPlot({
    target: "#root",
    width : 800,
    height: 500,
    yAxis: { domain: [-1,9] },
    grid: true,
    data: [
      {
        fn: "x*3",
        derivative: {
          fn: "2 * x",
          updateOnMouseMove: true
        }
      }
    ]
  });
  return (
    <>
  {functionPlot}
  </>
  )
}