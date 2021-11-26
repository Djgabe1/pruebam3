import React from 'react'
import './tamanhos.css'
import axios from 'axios'



export default function Tamanhos({talla}) {


    const FiltroTallas = async (e) =>{
        const res = await axios.get(' http://localhost:8000/Article');
            const info = res.data.filter((talla) => (
                talla.tallas.includes(e.target.value) ) 
            );
            console.log('TALLAS', info);
        if (info !== 0) {
            console.log( info);
        }else{
            console.log('vacio');
        }


    }

    return (
        <div className='tamanhos'>
            <div className="tamanhosWrapper">
                <div className="tamanhosItem">
                <input type="button" value={talla.name}  onClick={FiltroTallas} className='buttontallas' />
                </div>
            </div>
        </div>
    )
}
