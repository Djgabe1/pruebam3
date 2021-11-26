import React, {useState, useEffect} from 'react'
import Cores from './cores/Cores'
import Tamanhos from './tamanhos/Tamanhos'
import axios from "axios"


//css
import './sidebar.css'

export default function Sidebar() {

    const [talla, setTallas]= useState([]);
    const [core, setCores]= useState([]);

    useEffect(()=>{
        const FetchTallas = async () =>{
            const res = await axios.get('http://localhost:8000/tallas')
            console.log('FetchTallas ', res.data);
            setTallas(res.data)
        }
        FetchTallas();
    }, []);

    useEffect(() =>{
        const FetchCores = async () =>{
            const res = await axios.get('http://localhost:8000/Cores')
            console.log('FetchCores', res.data);
            setCores(res.data);
        }

        FetchCores();
    }, [])

    

    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
            <div className="cores">
                <span>Cores</span>
                    <div className="coresWrapper">
                   
                    { core.map(c=>(
                        <Cores key={c.id} core={c}/>
                    ))
                        }
                    </div>
            </div>
            <div className="tamanhos">
                <span>TAMANHOS</span>
                    <div className="tamanhosWrapper">
                    
                        {talla.map(t=>(
                            <Tamanhos key={t.id} talla={t} />
                        ))}
                    </div>
                </div>
                
            </div>
        </div>
    )
}
