// import {action} from '@storybook/addon-actions';
import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Table} from '../dist/';

storiesOf('Table', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface TableProps {
      className?: string;
      responsive?: boolean;
      simple?: boolean;
      striped?: boolean;
      transparent?: boolean;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="col-sm-6">
        <div className="form-group">
          <Table>
            <tbody>
              <tr>
                <th>Asset1</th>
                <th>Asset2</th>
                <th>Bid price</th>
                <th>Ask price</th>
              </tr>
              <tr>
                <td>AUD</td>
                <td>USD</td>
                <td>0.74931</td>
                <td>0.74933</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>USD</td>
                <td>8290</td>
                <td>8349.48</td>
              </tr>
              <tr>
                <td>BCH</td>
                <td>USD</td>
                <td>1320</td>
                <td>1457.5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ))
);

storiesOf('Table', module).add(
  'responsive',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-6">
        <div className="form-group">
          <Table responsive>
            <tbody>
              <tr>
                <th>Asset1</th>
                <th>Asset2</th>
                <th>Bid price</th>
                <th>Ask price</th>
              </tr>
              <tr>
                <td>AUD</td>
                <td>USD</td>
                <td>0.74931</td>
                <td>0.74933</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>USD</td>
                <td>8290</td>
                <td>8349.48</td>
              </tr>
              <tr>
                <td>BCH</td>
                <td>USD</td>
                <td>1320</td>
                <td>1457.5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ))
);

storiesOf('Table', module).add(
  'simple',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-6">
        <div className="form-group">
          <Table simple>
            <tbody>
              <tr>
                <th>Asset1</th>
                <th>Asset2</th>
                <th>Bid price</th>
                <th>Ask price</th>
              </tr>
              <tr>
                <td>AUD</td>
                <td>USD</td>
                <td>0.74931</td>
                <td>0.74933</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>USD</td>
                <td>8290</td>
                <td>8349.48</td>
              </tr>
              <tr>
                <td>BCH</td>
                <td>USD</td>
                <td>1320</td>
                <td>1457.5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ))
);

storiesOf('Table', module).add(
  'striped',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-6">
        <div className="form-group">
          <Table striped>
            <tbody>
              <tr>
                <th>Asset1</th>
                <th>Asset2</th>
                <th>Bid price</th>
                <th>Ask price</th>
              </tr>
              <tr>
                <td>AUD</td>
                <td>USD</td>
                <td>0.74931</td>
                <td>0.74933</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>USD</td>
                <td>8290</td>
                <td>8349.48</td>
              </tr>
              <tr>
                <td>BCH</td>
                <td>USD</td>
                <td>1320</td>
                <td>1457.5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ))
);

storiesOf('Table', module).add(
  'transparent',
  withInfo('')(() => (
    <div className="container">
      <div className="col-sm-6">
        <div className="form-group">
          <Table transparent>
            <tbody>
              <tr>
                <th>Asset1</th>
                <th>Asset2</th>
                <th>Bid price</th>
                <th>Ask price</th>
              </tr>
              <tr>
                <td>AUD</td>
                <td>USD</td>
                <td>0.74931</td>
                <td>0.74933</td>
              </tr>
              <tr>
                <td>BTC</td>
                <td>USD</td>
                <td>8290</td>
                <td>8349.48</td>
              </tr>
              <tr>
                <td>BCH</td>
                <td>USD</td>
                <td>1320</td>
                <td>1457.5</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ))
);
