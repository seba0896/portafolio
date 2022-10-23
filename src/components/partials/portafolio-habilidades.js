import * as React from 'react';
import '../../css/portafolio-habilidades.css'
/* import {
    portafolioServicios,
    portafolioServiciosTitle,
    cardsContainer,
    card,
    cardContent,
    cardImg
} from '../../components/layout.module.css' */
import Seo from '../seo';

const PortafolioHabilidades = () => {
    return(

        <>
            <section className='portafolio-habilidades'>
                <div className='portafolio-habilidades-title'>
                    <h2>Habilidades</h2>
                </div>
                <div className='cards-container'>
                    <article className='card'>
                        <div className='card-img'>
                            F
                        </div>
                        <h3>Frontend</h3>
                        <hr />
                        <div className='card-content'>
                            <ul className='frontend-list'>
                                <li className='frontend-list-item'>JavaScript</li>
                                <li className='frontend-list-item'>ReactJS</li>
                                <li className='frontend-list-item'>Gatsby</li>
                                <li className='frontend-list-item'>Bootstrap</li>
                                <li className='frontend-list-item'>Bulma</li>
                            </ul>
                        </div>
                    </article>
                    <article className='card'>
                        <div className='card-img'>
                            B
                        </div>
                        <h3>Backend</h3>
                        <hr />
                        <div className='card-content'>
                            <ul className='backend-list'>
                                <li className='backend-list-item'>NodeJS</li>
                                <li className='backend-list-item'>ExpressJS</li>
                                <li className='backend-list-item'>MongoDB</li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export const Head = () => <Seo title='Portafolio' />


export default PortafolioHabilidades;