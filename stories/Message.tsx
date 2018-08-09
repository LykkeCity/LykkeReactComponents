import {storiesOf} from '@storybook/react';
import React from 'react';
import {HBar, Message, MessageType} from '../dist/';

storiesOf('Message', module).add('note', () => (
  <div className="container">
    <div className="col-sm-7">
      <Message type={MessageType.Note}>
        Lykke KYC officers cannot change the order of users for performing KYC
        checks and don’t have an ability to visually recognize partners’ users
        from Lykke Wallet users.
      </Message>
    </div>
  </div>
));

storiesOf('Message', module).add('identified', () => (
  <div className="container">
    <div className="col-sm-7">
      <Message type={MessageType.Identified} subtitle="12:32 CET">
        We have resolved the issue that was causing delayed ETH payments. No
        customer funds were delayed as a result of this incident.
      </Message>
    </div>
  </div>
));

storiesOf('Message', module).add('update', () => (
  <div className="container">
    <div className="col-sm-7">
      <Message type={MessageType.Update} subtitle="07:46 CET">
        Website slow load times yet.
      </Message>
    </div>
  </div>
));

storiesOf('Message', module).add('information', () => (
  <div className="container">
    <div className="col-sm-7">
      <Message type={MessageType.Information}>
        The web trading wallet is currently under active development. It will be
        improved in the coming weeks, to eventually offer the same
        functionalities as our mobile Lykke Wallet. In the meantime, please use
        our mobile application to access all functionalities.
        <HBar />
        <a href="#">Don't show again</a>
      </Message>
    </div>
  </div>
));
