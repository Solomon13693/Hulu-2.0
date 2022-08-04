import React from 'react'
import Meta from './Meta'

function Layout({ children }) {
    return (

        <>
            <Meta />
            <div className=""> {children} </div>
        </>

    )
}

export default Layout