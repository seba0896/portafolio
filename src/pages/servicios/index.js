import * as React from 'react';
import Layout from '../../components/layout'
import Footer from '../../components/partials/footer';
import Seo from '../../components/seo';
import { graphql } from 'gatsby';


const Servicios = ( { data } ) => {

    return(
        <>
            <Layout pageTitle='Servicios'>

                    {
                        data.allMdx.nodes.map( node => (
                            <div>
                                <h2> {node.frontmatter.title} </h2>
                                <p> { node.frontmatter.content } </p>
                            </div>
                        ))
                    }
                
            </Layout>
            <Footer />
        </>
    )
}


export const data = graphql`
    query{
        allMdx(filter: {frontmatter: {parent: {eq: "servicios"}}}) {
            nodes {
            frontmatter {
                title
                content
                }
            }
        }
    }
`

export const Head = () => <Seo title='Servicios'/>

export default Servicios