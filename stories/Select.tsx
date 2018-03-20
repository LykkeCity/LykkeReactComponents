import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Select} from '../dist/';

storiesOf('Select', module)
  .add('overview',
    withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface SelectProps {
      className?: string;
      labelKey: string;
      onChange?: any;
      optGroups?: Array<{label: string; options: any[]}>;
      optionRenderer?: (option: any) => any;
      options?: any[];
      placeholder?: string;
      searchPlaceholder?: string;
      selectRenderer?: (selectedOption?: any) => any;
      value?: string;
      valueKey: string;
    }
    ~~~
    `)(() =>
      <div className="container">
        <div className="col-sm-6">
          <div className="form-group">
            <Select
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(o: any) => action('changed')(o)}
              options={[
                {label: 'Item 1', value: 1},
                {label: 'Item 1.1', value: 1.1},
                {label: 'Item 3', value: 3}
              ]}
              placeholder="Select placeholder"
              searchPlaceholder="Search placeholder"
              labelKey='label'
              valueKey='value'
            />
          </div>
        </div>
      </div>
    )
  )

storiesOf('Select', module)
  .add('optGroups',
    withInfo('')(() =>
      <div className="container">
        <div className="col-sm-6">
          <div className="form-group">
            <Select
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(o: any) => action('changed')(o)}
              optGroups={[
                {
                  label: 'Category 1',
                  options: [
                    {label: 'Item 1', value: 1},
                    {label: 'Item 1.1', value: 1.1}
                  ]
                },
                {
                  label: 'Category 2',
                  options: [
                    {label: 'Item 3', value: 3}
                  ]
                }
              ]}
              labelKey='label'
              valueKey='value'
            />
          </div>
        </div>
      </div>
    )
  )

storiesOf('Select', module)
  .add('select renderer',
    withInfo('')(() =>
      <div className="container">
        <div className="col-sm-6">
          <div className="form-group">
            <Select
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(o: any) => action('changed')(o)}
              options={[
                {label: 'Item 1', value: 1},
                {label: 'Item 1.1', value: 1.1},
                {label: 'Item 3', value: 3}
              ]}
              labelKey='label'
              valueKey='value'
              // tslint:disable-next-line:jsx-no-lambda
              selectRenderer={(o: any) => (
                <div>{o.label} ({o.value})</div>
              )}
            />
          </div>
        </div>
      </div>
    )
  )

storiesOf('Select', module)
  .add('option renderer',
    withInfo('')(() =>
      <div className="container">
        <div className="col-sm-6">
          <div className="form-group">
            <Select
              // tslint:disable-next-line:jsx-no-lambda
              onChange={(o: any) => action('changed')(o)}
              options={[
                {label: 'Item 1', value: 1},
                {label: 'Item 1.1', value: 1.1},
                {label: 'Item 3', value: 3}
              ]}
              labelKey='label'
              valueKey='value'
              // tslint:disable-next-line:jsx-no-lambda
              optionRenderer={(o: any) => (
                <div><a>{o.label} ({o.value})</a></div>
              )}
            />
          </div>
        </div>
      </div>
    )
  )
