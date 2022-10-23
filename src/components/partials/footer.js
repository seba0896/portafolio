import React from 'react';


import { footer } from '../../components/layout.module.css'

const Footer = () => {

    return(

        <>
            <footer className={footer}>
                <small className='p-2 d-flex justify-content-center align-items-center'>
                    <p className='text-dark text-center'>Todos los derechos reservados &copy; { new Date().getFullYear() }</p>
                </small>
            </footer>
        </>
    )
}




export default Footer