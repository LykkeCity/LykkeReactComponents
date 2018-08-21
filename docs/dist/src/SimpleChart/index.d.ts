/// <reference types="react" />
import React from 'react';
export interface SimpleChartProps {
    width: number;
    height: number;
    data: any[];
    color?: string;
    dataKey?: string;
}
export declare const SimpleChart: React.SFC<SimpleChartProps>;
export default SimpleChart;
