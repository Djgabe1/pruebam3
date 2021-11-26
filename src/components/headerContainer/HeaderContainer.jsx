import React from 'react'
import './headerContainer.css'

//order select

import Order from '../order/Order'


export default function HeaderContainer() {
    return (
        <div className='headerContainer'>
            <p className='TitleContainer'>Blusas</p>
            <Order className='order' />
        </div>
    )
}
