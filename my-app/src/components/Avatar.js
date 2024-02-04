import React, { Component } from 'react';
import { FaHorse } from "react-icons/fa";
import {GiFlowerPot, GiFruiting } from "react-icons/gi"


class Avatar extends Component {
  render() {
    return (
        <div style={{textAlign: 'center'}}>
            <FaHorse style={{color: '#388994', padding: '20px', fontSize: '100px'}}/>  <GiFlowerPot style={{color: '#9A73AA', padding: '20px', fontSize: '100px'}}/>  <GiFruiting style={{color: '#DB5987', padding: '20px', fontSize: '100px'}}/>
        </div>
    )
  }
}

export default Avatar;