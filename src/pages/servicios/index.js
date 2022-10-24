import * as React from 'react';
import Layout from '../../components/layout'
import Footer from '../../components/partials/footer';
import Seo from '../../components/seo';
import { graphql, Link } from 'gatsby';

import '../../css/servicios.css'

const Servicios = ( { data } ) => {

    return(
        <>
            <Layout pageTitle='Servicios'>

                <section className='servicios'>
                    {
                        data.allMdx.nodes.map( node => (
                               <div className='cards-container'>
                                    <h2> {node.frontmatter.title} </h2>
                                    <p> { node.frontmatter.content } <Link to={node.frontmatter.slug}>{node.frontmatter.mas}</Link> </p>
                               </div>
                        ))
                    }
                    </section>
                
            </Layout>
            <Footer />
        </>
    )
}


export const data = graphql`
    query{
        allMdx(
            filter: {frontmatter: {parent: {eq: "servicios"}}}
            sort: {order: ASC, fields: frontmatter___date}
        ) {
            nodes {
            frontmatter {
                title
                content
                mas
                slug
                }
            }
        }
    }
`

export const Head = () => <Seo title='Servicios'/>

export default Servicios