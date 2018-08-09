import {mount, shallow} from 'enzyme';
import React from 'react';
import {Select} from '../Select';

const optGroups = [
  {
    label: 'Foo',
    options: [
      {
        label: 'foo 1',
        value: 'foo1'
      },
      {
        label: 'foo 2',
        value: 'foo2'
      }
    ]
  },
  {
    label: 'Bar',
    options: [
      {
        label: 'bar 1',
        value: 'bar1'
      }
    ]
  },
  {
    label: 'Baz',
    options: []
  }
];

const options = [
  {
    label: 1,
    value: '1'
  },
  {
    label: 'Bar',
    value: 'bar'
  },
  {
    label: 'Baz',
    value: 'baz'
  }
];

test('Select should set empty array as options by default', () => {
  const select = mount(
    <Select labelKey="label" valueKey="value" className="foo" />
  );
  const instance = select.instance() as any;
  expect(instance.options).toBeInstanceOf(Array);
  expect(instance.options).toHaveLength(0);
});

test('Select should update state on handleSelectClose', () => {
  const select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      className="foo"
    />
  );
  const instance = select.instance() as any;
  instance.setState = jest.fn();
  instance.handleSelectClose();
  expect(instance.setState).toBeCalledWith({isOpen: false});
});

test('Select should set className', () => {
  const select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      className="foo"
    />
  );
  expect(select.find('.foo').hostNodes()).toHaveLength(1);
});

test('Select should extract options from both optGroups or options prop', () => {
  let select = shallow(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  let selectInstance = select.instance() as Select;
  expect(selectInstance.options).toHaveLength(3);

  select = shallow(
    <Select optGroups={optGroups} labelKey="label" valueKey="value" />
  );
  selectInstance = select.instance() as Select;
  expect(selectInstance.options).toHaveLength(3);
});

test('Select should call onChange handler', () => {
  const handleChange = jest.fn();
  const select = shallow(
    <Select
      onChange={handleChange}
      options={options}
      labelKey="label"
      valueKey="value"
    />
  );
  const selectInstance = select.instance() as Select;

  expect(handleChange).not.toBeCalled();
  selectInstance.handleOptionClick(options[0]);
  expect(handleChange).toBeCalledWith(options[0]);
});

test('Select should detect selected option', () => {
  const select = shallow(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  const selectInstance = select.instance() as Select;

  expect(selectInstance.selectedOption).toBeUndefined();
  selectInstance.handleOptionClick(options[0]);
  expect(selectInstance.selectedOption).toBe(options[0]);
});

test('Select should handle value prop', () => {
  const select = shallow(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;

  expect(selectInstance.selectedOption).toBe(options[0]);
  select.setProps({value: options[1].value});
  expect(selectInstance.selectedOption).toBe(options[1]);
});

test('Select should focus 1st option on open if no value selected', () => {
  const select = shallow(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  const selectInstance = select.instance() as Select;

  selectInstance.handleSelectOpen();
  expect(selectInstance.focusedOption).toBe(options[0]);
});

test('Select should focus selected option on open', () => {
  const select = shallow(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[1].value}
    />
  );
  const selectInstance = select.instance() as Select;

  selectInstance.handleSelectOpen();
  expect(selectInstance.focusedOption).toBe(options[1]);
});

test('Select should change focus by mouseenter', () => {
  const select = shallow(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;

  selectInstance.handleSelectOpen();
  expect(selectInstance.focusedOption).toBe(options[0]);
  selectInstance.handleOptionMouseEnter(options[1]);
  expect(selectInstance.focusedOption).toBe(options[1]);
});

test('Select should be controlled by keyboard', () => {
  const select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;

  selectInstance.handleSelectOpen();
  expect(selectInstance.selectedOption).toBe(options[0]);
  expect(selectInstance.focusedOption).toBe(options[0]);
  select.find('input').simulate('keydown', {key: 'ArrowDown'});
  expect(selectInstance.focusedOption).toBe(options[1]);
  select.find('input').simulate('keydown', {key: 'ArrowDown'});
  expect(selectInstance.focusedOption).toBe(options[2]);
  select.find('input').simulate('keydown', {key: 'ArrowDown'});
  expect(selectInstance.focusedOption).toBe(options[0]);
  select.find('input').simulate('keydown', {key: 'ArrowUp'});
  expect(selectInstance.focusedOption).toBe(options[2]);
  select.find('input').simulate('keydown', {key: 'ArrowUp'});
  expect(selectInstance.focusedOption).toBe(options[1]);
  select.find('input').simulate('keydown', {key: 'ArrowUp'});
  expect(selectInstance.focusedOption).toBe(options[0]);
  select.find('input').simulate('keydown', {key: 'ArrowDown'});
  expect(selectInstance.focusedOption).toBe(options[1]);
  select.find('input').simulate('keydown', {key: 'Enter'});
  expect(selectInstance.selectedOption).toBe(options[1]);
  expect(selectInstance.state.isOpen).toBeFalsy();
  selectInstance.handleSelectOpen();
  expect(selectInstance.state.isOpen).toBeTruthy();
  select.find('input').simulate('keydown', {key: 'Escape'});
  expect(selectInstance.state.isOpen).toBeFalsy();
});

test('Select should not set default state on key down for closed select without options', () => {
  const select = mount(
    <Select
      options={[]}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;
  selectInstance.setState = jest.fn();

  select.find('input').simulate('keydown', {key: 'ArrowDown'});
  expect(selectInstance.setState).not.toBeCalled();
});

test('Select should set default state on key down in closed select', () => {
  const select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;
  selectInstance.setState = jest.fn();

  select.find('input').simulate('keydown', {key: 'ArrowDown'});
  expect(selectInstance.setState).toBeCalledWith({
    focusedOptionValue: options[0].value
  });
});

test('Select should set default state on key up in closed select', () => {
  const select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;
  selectInstance.setState = jest.fn();

  select.find('input').simulate('keydown', {key: 'ArrowUp'});
  expect(selectInstance.setState).toBeCalledWith({
    focusedOptionValue: options[0].value
  });
});

test('Select should filter options', () => {
  const select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      value={options[0].value}
    />
  );
  const selectInstance = select.instance() as Select;

  selectInstance.handleSelectOpen();
  expect(selectInstance.visibleOptions).toHaveLength(3);
  select.find('input').simulate('change', {target: {value: 'ba'}});
  expect(selectInstance.visibleOptions).toHaveLength(2);
  select.find('input').simulate('change', {target: {value: 'bar'}});
  expect(selectInstance.visibleOptions).toHaveLength(1);
  select.find('input').simulate('change', {target: {value: 'barz'}});
  expect(selectInstance.visibleOptions).toHaveLength(0);
});

test('Select should correctly render select control', () => {
  let select = mount(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  let selectInstance = select.instance() as Select;

  expect(
    select.find('.select-dropdown__control .dropdown__control').text()
  ).toBe('');
  selectInstance.handleOptionClick(options[0]);
  expect(
    select.find('.select-dropdown__control .dropdown__control').text()
  ).toBe(String(options[0].label));

  select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      placeholder="Select..."
    />
  );
  selectInstance = select.instance() as Select;

  expect(
    select
      .find('.select-dropdown__control .select-dropdown__placeholder')
      .text()
  ).toBe('Select...');
  selectInstance.handleOptionClick(options[0]);
  expect(
    select.find('.select-dropdown__control .dropdown__control').text()
  ).toBe(String(options[0].label));

  const selectRenderer = (option: any) => `foo${option.value}bar`;
  select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      selectRenderer={selectRenderer}
    />
  );
  selectInstance = select.instance() as Select;

  expect(
    select.find('.select-dropdown__control .dropdown__control').text()
  ).toBe('');
  selectInstance.handleOptionClick(options[0]);
  expect(
    select.find('.select-dropdown__control .dropdown__control').text()
  ).toBe(`foo${options[0].value}bar`);
});

test('Select should correctly render option', () => {
  let select = mount(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  let selectInstance = select.instance() as Select;
  selectInstance.handleSelectOpen();

  expect(
    select
      .find('.select-dropdown__option')
      .first()
      .text()
  ).toBe(String(options[0].label));

  const optionRenderer = (option: any) => `foo${option.value}bar`;
  select = mount(
    <Select
      options={options}
      labelKey="label"
      valueKey="value"
      optionRenderer={optionRenderer}
    />
  );
  selectInstance = select.instance() as Select;
  selectInstance.handleSelectOpen();

  expect(
    select
      .find('.select-dropdown__option')
      .first()
      .text()
  ).toBe(`foo${options[0].value}bar`);
});

test('Select should call callback on option mouse enter', () => {
  const select = mount(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  const selectInstance = select.instance() as Select;
  selectInstance.handleSelectOpen();

  const firstOption = select.find('.dropdown-list__item').first();
  const handleOptionMouseEnter = jest.fn();
  (select.instance() as any).handleOptionMouseEnter = handleOptionMouseEnter;
  (firstOption.props() as any).onMouseEnter();

  expect(handleOptionMouseEnter).toBeCalled();
});

test('Select should call callback on option click', () => {
  const select = mount(
    <Select options={options} labelKey="label" valueKey="value" />
  );
  const selectInstance = select.instance() as Select;
  selectInstance.handleSelectOpen();

  const firstOption = select.find('.dropdown-list__item').first();
  const handleOptionClick = jest.fn();
  (select.instance() as any).handleOptionClick = handleOptionClick;
  (firstOption.props() as any).onClick();

  expect(handleOptionClick).toBeCalled();
});
