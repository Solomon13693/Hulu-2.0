import React from 'react'
import Header from './Header/Header'
import Navbar from './Navbar'
import Meta from './Meta'

function Layout({ children }) {
    return (

        <div className='container m-auto'>
            <Meta />
            <Header />
            <Navbar />
            <div className=""> {children} </div>
        </div>

    )
}

export default Layout