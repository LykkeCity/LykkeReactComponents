import React from 'react';

// tslint:disable-next-line:no-var-requires
const {Line, LineChart, YAxis} = require('recharts');

export interface SimpleChartProps {
  width: number;
  height: number;
  data: any[];
  color?: string;
  dataKey?: string;
}

export const SimpleChart: React.SFC<SimpleChartProps> = ({
  width,
  height,
  data,
  /* istanbul ignore next */
  color = '#000000',
  /* istanbul ignore next */
  dataKey = 'value'
}) => {
  return (
    <LineChart width={width} height={height} data={data}>
      <YAxis hide={true} type="number" domain={['dataMin', 'dataMax']} />
      <Line
        type="monotone"
        dot={false}
        isAnimationActive={false}
        dataKey={dataKey}
        stroke={color}
        strokeWidth={2}
      />
    </LineChart>
  );
};

export default SimpleChart;
