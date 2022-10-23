import * as React from 'react';
//import { graphql } from 'gatsby';
import Seo from '../../components/seo';



const BlogPage = ({data}) => {

    return(
        <>
        <h2>Blog</h2>
           {/* {
            data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>{node.frontmatter.title}</h2>
                    <p>{node.frontmatter.content}</p>
                </article>
            ))
           } */}
        </>
    )
}

/* export const data = graphql `
    query{
        allMdx(limit: 3, sort: {fields: frontmatter___date, order: ASC}) {
            nodes {
              frontmatter {
                title
                content
                date
              }
            }
        }
    }
  
` */

export const Head = () => <Seo title="Blog Page" />

export default BlogPage;