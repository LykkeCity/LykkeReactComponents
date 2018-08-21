import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import SimpleChart from '../SimpleChart';

Enzyme.configure({adapter: new Adapter()});

test('SimpleChart should render svg', () => {
  const data = [{value: 1}, {value: 2}, {value: 3}];
  const wrapper = mount(<SimpleChart width={300} height={300} data={data} />);
  expect(wrapper.find('svg')).toHaveLength(1);
});

test('SimpleChart should use value from parameter', () => {
  const data = [{param: 1}, {param: 2}, {param: 3}];
  const wrapper = mount(
    <SimpleChart width={300} height={300} data={data} dataKey="param" />
  );
  expect(wrapper.find('svg')).toHaveLength(1);
});
