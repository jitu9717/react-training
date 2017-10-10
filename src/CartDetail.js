import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CartTotal from './CartTotal';
import './App.css';
import FontAwesome from 'react-fontawesome'

class CartDetail extends Component {
    constructor(props){
        super(props)
    }
    render(){
        let itemDetails  = this.props.items;
        const itemList = itemDetails && itemDetails.map((itemDetail,i) =>
            <tr key={i}>
                <td>{itemDetail.name}</td>
                <td>{itemDetail.qty}</td>
                <td>{itemDetail.price}</td>
                <td>
                    <FontAwesome
                    className='super-crazy-colors'
                    name='plus'
                    style={{color:'green' }}
                    onClick={()=>this.props.incQtyFun(itemDetail,i)}/>
                </td>
                <td>
                    <FontAwesome
                    className='super-crazy-colors'
                    name='minus'
                    style={{color:'green' }}
                    onClick={()=>this.props.decQtyFun(itemDetail,i)}/>
                </td>
                <td>
                    <FontAwesome
                    className='super-crazy-colors'
                    name='times-circle'
                    style={{color:'red' }}
                    onClick={()=>this.props.deleteFun(itemDetail,i)}/>
                </td>
            </tr> );
        return(
            <table style={{marginTop:'15px'}}>

                <thead>
                <tr>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Increase</th>
                    <th>Decrease</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {itemList}
                <CartTotal items = {itemDetails} ></CartTotal>
                </tbody>
            </table>
        )
    }
}

export default CartDetail;
