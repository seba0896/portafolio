import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../seo';
import { portafolioAcerca, acercaContent, acercaImg } from '../../components/layout.module.css'
import { Link } from 'gatsby';



const PortafolioAcerca = () => {

    return(
        <>
            <section className={portafolioAcerca}>
                <article className={acercaContent}>
                    <h3>¿Quién Soy?</h3>
                    <hr />
                    <p>
                        Hola, mi nombre es <b>Sebastían González Rodríguez</b>. Soy Ingeniero de Sistemas y Computación inclinado al desarrollo Web. Este es mi proyecto personal donde te brindo mis servicios, expongo mis habilidades y conocimientos. Cuento con más de 2 años de experiencias y me mantengo en constante capacitación con la finalidad de estar actualizado en éste mundo tan maravilloso del desarrollo Web y así poder brindar mi mejor aporte basado en las tecnologías modernas que nos permiten tener <i><strong>Sitios Web</strong></i> modernos y orientados a la mejor experiencia de usuario. Si quieres saber más de mi y de mis servicios, has click <Link to='/acerca'> Aquí.</Link>
                    </p>
                    <strong>¡Trabajemos juntos...!</strong>
                </article>
                <div className={acercaImg}>
                    <StaticImage  src='https://placeimg.com/400/400/people'/>
                </div>
            </section>
        </>
    )
}

export const Head = () => <Seo title='Portafolio' />

export default PortafolioAcerca