import React from 'react'
import './rightbar.css'
//import {Article} from '../../articleData'

export default function Rigthbar({article}) {

    


    return (
        <>
            <div className='article'>
                <div className="card">
                    <div className="cardItem">
                        <div className="cardTop">
                            <img src={article.image} alt="" />
                        </div>
                        <div className="cardCenter">
                            <span className='articleName'>{article.name}</span>
                            <span className='price'>R$ {article.price}</span>
                            <span className='promo'> {article.promo} </span>
                        </div>
                        <div className="cardBotoom">
                            <button type='button'>COMPRAR</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
