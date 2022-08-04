import React from 'react'

const HeaderItems = ({ Icon, title }) => {
    return (
        <div className='flex  flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white '>
           <Icon className='h-5 mb-2 group-hover:animate-bounce' />
           <p className="tracking-widest opacity-0 group-hover:opacity-100 text-sm"> { title } </p>
        </div>
    )
}

export default HeaderItems