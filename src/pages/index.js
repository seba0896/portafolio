import * as React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { imgFondo, banner, bannerText } from '../components/layout.module.css'


const IndexPage = () => {

    return(
      <Layout>

        <StaticImage 
          className={imgFondo}
          src='../images/proximamente.jpg'
        />
        <div className={banner}>
          <h2 className={bannerText}>¡Proximamente!</h2>
        </div>
      </Layout>
    )
}


export const Head = () => {
  <>
    <link rel='stylesheet' href="../components/layout.css" />
  </>
}
export default IndexPage