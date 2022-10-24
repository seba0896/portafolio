import * as React from 'react';
import Layout from '../../components/layout';
import Footer from '../../components/partials/footer';
import Seo from '../../components/seo';

import { graphql, navigate } from 'gatsby';

import  '../../css/single-post.css'


const SingleServicio = ( { data } ) => {
   /*  if(data.mdx === null){
        navigate("/404/")
        
    } */
    return(
        <>
            <Layout>
                <section className='single-post'>
                    <h2>{ data.mdx.frontmatter.title }</h2>
                    <p>{ data.mdx.frontmatter.singleContent }</p>
                </section>
            </Layout>
            <Footer />
        </>
    )
}

export const data = graphql`
    query($id: String){
        mdx(id: {eq: $id}, frontmatter: {parent: {eq: "servicios" }}) {
            frontmatter {
              title
              singleContent
              parent
            }
            
        }
    }
`

export const Head = () => <Seo title='post'/>

export default SingleServicio