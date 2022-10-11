import React from 'react';


const Footer = () => {

    return(

        <>
            <footer className='footer bg-light'>
                <small className='p-2 d-flex justify-content-center align-items-center'>
                    <p className='text-dark text-center'>Todos los derechos reservados &copy; { new Date().getFullYear() }</p>
                </small>
            </footer>
        </>
    )
}




export default Footer