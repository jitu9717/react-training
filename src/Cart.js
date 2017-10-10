import React, { Component } from 'react';
import CartDetail from './CartDetail';
import './App.css';

const style = {
    topmargin : {
        margin: '0 auto',
        width: '600px',
    }
}
class Cart extends Component {

    constructor(){
        super()

        this.state = {
            Items  : [ {name: 'Mango', qty:2, price: 30} ],
            error: ""
        }
        //this.addItem = this.addItem.bind(this);
        //this.incQty = this.incQty.bind(this);
        //this.decQty = this.decQty.bind(this);
        //this.deleteFun = this.deleteFun.bind(this);

    }

    addItem = e => {
        let itemInfo = this.refs.itemInfo.value;
        let itemInfoSplit = itemInfo.split('-');
        if(!itemInfoSplit[1] || (itemInfoSplit[1] && isNaN(itemInfoSplit[1]) )){
            e.preventDefault();
            this.setState({error:"Enter a valid value."})
            return;
        }else{
            this.setState({error:""})
        }
        let name = itemInfoSplit[0];
        let price = itemInfoSplit[1];
        let qty = itemInfoSplit[2] || 1;

        this.setState({
            Items : [...this.state.Items,{name,price,qty}]
        });
    }

    incQty = (item,index) => {
        let newState = this.state.Items;
        item.qty = parseInt(item.qty) == 1 ? 1 : parseInt(item.qty) + 1;
        newState[index] = item;
        this.setState({Items:newState});
    }

    decQty = (item,index) => {
        let newState = this.state.Items;
        item.qty = parseInt(item.qty) == 1? 1 : parseInt(item.qty) - 1;
        newState[index] = item;
        this.setState({Items:newState});
    }

    deleteFun = (item,index) => {
        let newState = this.state.Items;
        newState.splice(index,1);
        this.setState({Items:newState});
    }

    render(){
        return(
            <div style={style.topmargin}>
                <h2>My Cart</h2>
                <span className="error" style={{color:'red'}}>{this.state.error}</span>
                <input className="textbox" type="text" ref="itemInfo" placeholder="Enter item and price separated by a - (hyphen)" style={{marginRight:'5px'}} />
                <button className="myButton" onClick={this.addItem}>Add</button>
                <CartDetail items = {this.state.Items} incQtyFun={this.incQty} decQtyFun={this.decQty} deleteFun={this.deleteFun}></CartDetail>
            </div>
        )
    }
}






export default Cart;
