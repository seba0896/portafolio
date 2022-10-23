import * as React from 'react';
import Layout from '../../components/layout';
import Footer from '../../components/partials/footer';
import Seo from '../../components/seo';

import { graphql } from 'gatsby';


const SinglePost = ( { data } ) => {
  
    return(
        <>
            <Layout>
                <h2>{ data.mdx.frontmatter.title }</h2>
            </Layout>
            <Footer />
        </>
    )
}

export const data = graphql`
    query($id: String){
        mdx(id: {eq: $id}, frontmatter: {parent: {eq: "blog" }}) {
            frontmatter {
              title
              parent
            }
            
        }
    }
`

export const Head = () => <Seo title='Single Post'/>

export default SinglePost