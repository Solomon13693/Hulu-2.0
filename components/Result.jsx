import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'
import Link from 'next/link'

const Result = ({ results }) => {
    return (
        <FlipMove className="my-12 m-auto sm:grid md:grid-cols-3 lg:grid-cols-4 3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                 <Link key={result.id} href={`/movie/${result.id}`}>
                    <a> <Thumbnail result={result} /> </a>
                </Link>
            ))}
        </FlipMove>
    )
}

export default Result