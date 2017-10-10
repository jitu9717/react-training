import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from './Form';

class CartTotal extends Component {
    constructor(props) {
        super(props)
    }
    render(){
        let itemDetails  = this.props.items;
        let  totalValue = itemDetails.reduce((total,itemDetail) =>  total + (itemDetail.qty * itemDetail.price),0)
        return(
            <tr>
                <td>Total</td>
                <td colSpan={4}></td>
                <td>{totalValue}</td>

            </tr>
        )
    }
}

/*CartTotal.propTypes = {
    items: React.PropTypes.array.isRequired,
}*/

export default CartTotal;
