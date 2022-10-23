import * as React from 'react';
import Footer from '../components/partials/footer';
import Layout from '../components/layout';
import Seo from '../components/seo';
import PortafolioAcerca from '../components/partials/portafolio-acerca';
import PortafolioServicios from '../components/partials/portafolio-servicios';
import PortafolioHabilidades from '../components/partials/portafolio-habilidades';

const Portafolio = () => {

    return(
        <>
        <Layout>
            <PortafolioAcerca />
            <PortafolioServicios />
            <PortafolioHabilidades />
        </Layout>
        <Footer />
        </>
    )
}

export const Head = () => <Seo title='Portafolio' />

export default Portafolio