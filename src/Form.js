import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const style = {
    topmargin : {
        marginTop: '20px',
    }
}



class Form extends Component {
  render() {
    return (
      <form style={style.topmargin}>
          <input className="textbox" type="text" name="detail" placeholder="Enter item and price separated by a - (hyphen)" />
          <sapn className="error">{this.state.error}</sapn>
      </form>
    );
  }
}


Form.defaultProps = {
    total: 0
};

Form.propTypes = {
    total: PropTypes.number.isRequired
}

export default Form;
