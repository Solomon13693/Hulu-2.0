import Image from 'next/image'
import React from 'react'
import HeaderItems from './Items'
import { HomeIcon, UserIcon, SearchIcon, CollectionIcon, BadgeCheckIcon, LightningBoltIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Header = () => {
    return (

        <div className="flex flex-col sm:flex-row mt-2 h-auto items-center justify-between mb-5">

            <div className="flex sm:hidden mb-3">
                <Link href='/'>
                    <a>
                        <Image className='object-contain' src='https://links.papareact.com/ua6' width={100} height={70} alt='Hulu Logo' />
                    </a>
                </Link>
            </div>

            <div className="flex items-center flex-grow">

                <HeaderItems title='Home' Icon={HomeIcon} link='/' />
                <HeaderItems title='Trending' Icon={LightningBoltIcon} link='/' />
                <HeaderItems title='Verified' Icon={BadgeCheckIcon} link='/' />
                <HeaderItems title='Collections' Icon={CollectionIcon} link='/' />
                <HeaderItems title='Search' Icon={SearchIcon} link='/' />
                <HeaderItems title='Account' Icon={UserIcon} link='/' />

            </div>

            <div className="hidden sm:flex">
                <Link href='/'>
                    <a>
                        <Image className='object-contain' src='https://links.papareact.com/ua6' width={100} height={70} alt='Hulu Logo' />
                    </a>
                </Link>
            </div>

        </div>

    )
}

export default Header