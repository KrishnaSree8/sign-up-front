import { withFormsy } from 'formsy-react';
import React from 'react';

class MyInput extends React.Component {
  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const errorMessage = this.props.errorMessage;

    return (
      <div style={{margin:'15px 0px'}}>
        <input onChange={this.changeValue} type="text" value={this.props.value || ''} {...this.props} size="50"/>
        <span>{errorMessage}</span>
      </div>
    );
  }
}

export default withFormsy(MyInput);