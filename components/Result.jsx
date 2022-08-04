import React from 'react'
import Thumbnail from './Thumbnail'
import FlipMove from 'react-flip-move'

const Result = ({ results }) => {
    return (
        <FlipMove className="my-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 3xl:flex flex-wrap justify-center">
            {results.map((result) => (
                <Thumbnail key={result.id} result={result} />
            ))}
        </FlipMove>
    )
}

export default Result