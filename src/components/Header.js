import React from 'react'
import '../Css/header.css'
import mandalaEsquerda from '../imgs/mandala-esquerda.png'


const Header = () => {
  return (
    <div>
        <div className='header'>
            <ul>
                <h1 className='tituloPrincipal'>Floricultu.RA</h1>

            <ul>
            <li><a href="#home">Home</a></li>
         <li><a href="#loja">Loja</a></li>

        </ul>
            </ul>
    </div>
                      <img src={mandalaEsquerda} alt="" className='imgHeader'/>
    </div>
  )
}

export default Header
