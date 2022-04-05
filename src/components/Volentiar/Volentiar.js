import React from 'react';
import './Volentiar.css'

const Volentiar = ({volunteer}) => {
    const {title, img} = volunteer;
    return (
        <div className='item'>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Volentiar;