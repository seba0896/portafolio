import * as React from 'react'

import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({title}) => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    
    return(
        <>
            <title>{title} | {data.site.siteMetadata.title}</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        </>
    )


}

export default Seo;