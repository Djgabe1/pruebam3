import React, {useEffect, useState} from 'react'
import Footer from '../../components/footer/Footer'
import HeaderContainer from '../../components/headerContainer/HeaderContainer'
import Rigthbar from '../../components/rigthbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import './home.css'


//Archive JSON 

import Carregar from '../../components/carregar/Carregar'
import axios from 'axios'


export default function Home() {
    const [Article, setArticle] = useState([]);

    useEffect(()=>{
        const FetchArticle = async () =>{
            const res = await axios.get('http://localhost:8000/Article');
            setArticle(res.data)
        }
        FetchArticle();
    }, [])

    

    
    return (
        <>
            <div className="homeContainer">
                <HeaderContainer/>
                <div className="bodyContainer">
                   <Sidebar />
                    <div className="rigthbar">
                        <div className="rigthbarWrapper">
                            {Article.map(a=>(
                            <Rigthbar key={a.id} article={a} className='rigthbarItem' />
                            ))}
                        </div>
                        <Carregar />
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}
