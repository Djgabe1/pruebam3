import React from 'react'
import './order.css'

export default function Order() {
    return (
        <div className='order'>
            <div className="orderWrapper">
               <div className="orderItem">
               <select>
                    <option value="0">Ordenar por:</option>
                    <option value="1">Mais recentes</option>
                    <option value="2">Menor pre&ccedil;o</option>
                    <option value="3">Maior pre&ccedil;o</option>
                </select>
               </div>
            </div>
        </div>
    )
}
