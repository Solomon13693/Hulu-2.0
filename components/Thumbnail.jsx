import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { forwardRef } from 'react'

const Thumbnail = forwardRef(function Thumbmail ({ result }, ref){

    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    return (
        <div ref={ref} className='group cursor-pointer mb-4 transition duration-200 ease-in-out transform sm:hover:scale-105 hover:z-50 p-2'>

            <Image layout='responsive' src={`${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`} alt={result.title} height={1080} width={1920} />

            <div className="p-2">

                <p className="truncate max-w-md"> {result.overview} </p>

                <h2 className='text-xl text-white transition-all duration-100 ease-in-out group-hover:font-bold mb-1'> {result.title || result.original_title} </h2>

                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    { result.media_type && `${result.media_type} ` }{""}
                    { result.release_date && `${result.release_date}` }{""}
                    <ThumbUpIcon className='h-5 ml-5 mx-1' /> { result.vote_count }
                </p>

            </div>

        </div>
    )

})

export default Thumbnail