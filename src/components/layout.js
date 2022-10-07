import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { container } from './layout.module.css'


const Layout = ( { pageTitle, children } ) => {

    return (

        <>
            <main className={container}>
                {children}
            </main>
        </>
    )



}


export const Head = () => (
    <>
        <link href="./layout.css" />
    </>
)

export default Layout