import React from 'react'
import Header from './Header/Header'
import Meta from './Meta'

function Layout({ children }) {
    return (

        <div className='container m-auto'>
            <Meta />
            <Header />
            <div className=""> {children} </div>
        </div>

    )
}

export default Layout