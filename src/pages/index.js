import * as React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { imgFondo, banner, imgBanner, bannerEtiqueta } from '../components/layout.module.css'

const IndexPage = () => {
 
  console.log("Desde INdex Page")

  return(
    <>
        <Layout>
          <StaticImage
            className={imgFondo}
            src='../images/proximamente.jpg'
            alt='Fondo'
            />

          <div className={banner} id="banner">
            <div className={imgBanner}>
              <StaticImage src='https://placeimg.com/500/500/people'></StaticImage>
            </div>
            <div className={bannerEtiqueta}>
              <h3>Sebastián González Rodríguez</h3>
              <hr />
              <h5>Desarrollador Web</h5>
            </div>
          </div>
        </Layout> 
      </>
    )
    
  }

export const Head = () => <Seo title='Front Page' />
export default IndexPage