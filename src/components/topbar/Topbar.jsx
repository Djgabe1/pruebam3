import React from 'react';
import {LocalMall } from '@material-ui/icons';
import './topbar.css'


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarContainer">
                <div className="topbarLeft"><img src="./assets/logo-m3.png" alt="" /></div>
                <div className="topbarRight"><LocalMall/></div>
            </div>
            <hr className='topbarHr' />
        </div>
    )
}
