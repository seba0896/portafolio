import * as React from 'react';
import Footer from '../components/footer';
import Layout from '../components/layout';
import Seo from '../components/seo';

const Portafolio = () => {

    return(
        <>
        <Layout>
            <section>
                <h1>Portafolio Page</h1>
            </section>
        </Layout>
        <Footer />
        </>
    )
}

export const Head = () => <Seo title='Portafolio' />

export default Portafolio