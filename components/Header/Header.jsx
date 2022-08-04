import Image from 'next/image'
import React from 'react'
import HeaderItems from './Items'
import { HomeIcon, UserIcon, SearchIcon, CollectionIcon, BadgeCheckIcon, LightningBoltIcon } from '@heroicons/react/outline'

const Header = () => {
    return (

        <div className="flex flex-col sm:flex-row mt-2 h-auto items-center justify-between">

            <div className="flex sm:hidden mb-3">
                <Image className='object-contain' src='https://links.papareact.com/ua6' width={100} height={70} alt='Hulu Logo' />
            </div>

            <div className="flex items-center flex-grow">

                <HeaderItems title='Home' Icon={HomeIcon} />
                <HeaderItems title='Trending' Icon={LightningBoltIcon} />
                <HeaderItems title='Verified' Icon={BadgeCheckIcon} />
                <HeaderItems title='Collections' Icon={CollectionIcon} />
                <HeaderItems title='Search' Icon={SearchIcon} />
                <HeaderItems title='Account' Icon={UserIcon} />

            </div>

            <div className="hidden sm:flex">
                <Image className='object-contain' src='https://links.papareact.com/ua6' width={100} height={70} alt='Hulu Logo' />
            </div>

        </div>

    )
}

export default Header