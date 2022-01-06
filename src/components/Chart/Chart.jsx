import React from 'react';
import ChartBar from './ChartBar';
import './Chart.scss';

const Chart = (props) => {
	const dataPointValues = props.chartDataPoints.map( el => el.value);
	const totalMaximum = Math.max(...dataPointValues);
	console.log(totalMaximum);

	return (
		<div className="chart">
			{props.chartDataPoints.map((el) => {
				return (
					<ChartBar
						key={el.label}
						value={el.value}
						maxValue={totalMaximum}
						label={el.label}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
