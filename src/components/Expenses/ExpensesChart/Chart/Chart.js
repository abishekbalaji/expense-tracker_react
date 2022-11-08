import "./Chart.css";
import ChartBar from "./ChartBar/ChartBar";

const Chart = function ({ dataPoints }) {
  const values = dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = values.reduce(
    (prevValue, currentValue) => prevValue + currentValue
  );

  console.log(maxValue);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
