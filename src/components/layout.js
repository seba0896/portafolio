import * as React from "react"
import Header from "./header"

import { container } from './layout.module.css'
import Scripts from "./scripts"

const Layout = ( { pageTitle, children } ) => {

    return (

        <>
            <Header />
            <main className={container}>
                {children}
            </main>
           <Scripts />
        </>
    )



}


export default Layout