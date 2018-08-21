import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {SimpleChart} from '../dist/';

function getRandomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateData() {
  const data = [] as any[];
  for (let i = 0; i < 10; i++) {
    data.push({value: getRandomIntFromInterval(1000, 2000)});
  }
  return data;
}

storiesOf('SimpleChart', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface SimpleChartProps {
      width: number;
      height: number;
      data: SimpleChartDataItem[];
      dataKey?: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <SimpleChart width={300} height={300} data={generateData()} />
        </div>
        <div className="col-md-4">
          <SimpleChart width={200} height={200} data={generateData()} />
        </div>
        <div className="col-md-2">
          <SimpleChart width={100} height={100} data={generateData()} />
        </div>
        <div className="col-md-2">
          <SimpleChart width={200} height={100} data={generateData()} />
        </div>
      </div>
    </div>
  ))
);
