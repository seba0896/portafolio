import * as React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import '../../css/portafolio-servicios.css'

import Seo from '../seo';

const PortafolioServicios = () => {

    const data = useStaticQuery(graphql`
            query{
                allMdx(
                    filter: {frontmatter: {parent: {eq: "servicios"}}}
                    limit: 3
                    sort: {order: ASC, fields: frontmatter___date}
                  ) {
                    nodes {
                      frontmatter {
                        title
                        excerpt
                        content
                        mas
                        cardimg
                        slug
                      }
                    }
                  }
            }
    `)

    return(

        <>
            <section className='portafolio-servicios'>
                <div className='portafolio-servicios-title'>
                    <h2>Servicios</h2>
                </div>
                <div className='cards-container'>
                    {
                        data.allMdx.nodes.map(( node ) => (
                            <article className='card'>
                                <div className='card-img'>
                                    {node.frontmatter.cardimg}
                                </div>
                                <h3>{node.frontmatter.title}</h3>
                                <div className='card-content'>
                                    <span>
                                        {node.frontmatter.content}
                                    </span>
                                    <span style={{marginLeft: ".5rem"}}><Link to={`/servicios/${node.frontmatter.slug}`}> {node.frontmatter.mas}</Link></span>
                                </div>
                            </article>
                        ))
                    }
                </div>


               {/*  <div className='portafolio-servicios-title'>
                    <h2>Servicios</h2>
                </div>
                <div className='cards-container'>
                    <article className='card'>
                        <div className='card-img'>
                            F
                        </div>
                        <h3>Frontend Developer</h3>
                        <div className='card-content'>
                            <span>
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdk
                                lkxañsaksdjaslkjdañskdñsakdsñlakdñlsadkñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdk
                                lkxañsaksdjaslkjdañskdñsakdsñlakdñlsadkñ
                            </span>
                        </div>
                    </article>
                    <article className='card'>
                        <div className='card-img'>
                            B
                        </div>
                        <h3>Backend Developer</h3>
                        <div className='card-content'>
                            <span>
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                            </span>
                        </div>
                    </article>
                    <article className='card'>
                        <div className='card-img'>
                            W
                        </div>
                        <h3>Wordpress Custom Theme</h3>
                        <div className='card-content'>
                            <span>
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                                kñasdkñaslkdaslñdkñaskdañsldkaskañsdkasñ
                            </span>
                        </div>
                    </article>
                </div> */}
            </section>
        </>
    )


}


export const Head = () => <Seo title='Portafolio' />


export default PortafolioServicios;