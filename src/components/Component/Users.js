import React from 'react';
import { addToDb } from '../../utilities/fakedb';
import './Users.css'

const Users = (props) => {
    const {name, price ,id}= props.users
    const addToCart = (id)=>{
       addToDb(id)
    }
    return (
        <div className='users-id'>
            <h1>Name : {name}</h1>
            <h2>Price : {price}</h2>
            <h3>Id : {id}</h3>
            <button onClick={()=> addToCart(id)} > Add to cart</button>
        </div>
    );
};

export default Users;