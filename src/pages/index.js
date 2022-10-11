import * as React from 'react'

import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { imgFondo, banner } from '../components/layout.module.css'

import anime from 'animejs'

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
            <h2>Sebastián</h2>
            <h2>González</h2>
            <h2>Rodríguez</h2>
          </div>
        </Layout> 
      </>
    )
    
  }

  const tl = anime.timeline({
    targets: "#banner",
    delay: 2,
    duration: 500,
    easing: 'easeOutExpo',
    direction: 'altarnate',
    loop: true
  })

  tl.add({
    scale: [
      {value: .4, easing: 'easeOutSine', duration: 500},
    ],
    opacity: 0
  })

  tl.add({
    scale: [
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    opacity: 1
  })
export const Head = () => <Seo title='Front Page' />
export default IndexPage