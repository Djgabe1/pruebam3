import axios from 'axios';
import React, { useState, useEffect} from 'react'


export default function Cores({core}) {

    const [filtroCores, setFiltroCores] = useState([]);
    


    const FilterCores = async (e) =>{
        const indice = e.target.value;
        const res = await axios.get('http://localhost:8000/Article')
        const infoCores = res.data.filter((core) =>(
            core.cores.includes(indice) 
        ));
        console.log('CoresArray', infoCores);
        setFiltroCores(infoCores.data)
        
    }
    

    return (
        <div className='cores'>
            <div className="cores">
                    
                    <div className="coresItem">
                    <input type="checkbox" value={core.name} onClick={FilterCores}  />
                    <label htmlFor="Amarelo">{core.name}</label> 
                    </div>
                </div>
        </div>
    )
}
