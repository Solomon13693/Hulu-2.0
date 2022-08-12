import React from 'react'
import axios from 'axios'
import Image from 'next/image'

const API_KEY = process.env.API_KEY;

const SingleMovie = ({ article }) => {

    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const MoviePoster = `${BASE_URL}${article.backdrop_path || article.poster_path}` || `${BASE_URL}${article.poster_path}`

    return (

        <div className="container flex items-center flex-wrap m-auto">

            <div className="md:w-1/2 w-full h-full mx-8 mb-6">
                <Image className='object-cover mr-1' src={MoviePoster} alt={article.title} width={1920} height={1500} />
            </div>

            <div className="md:w-1/2 w-full">

                <h1 className='mb-6 text-4xl font-bold'> {article.title} </h1>

                <p className='font-light mb-3'> {article.overview} </p>

                <address className='font-bold mb-3'> Released Date: <span className="font-light">{article.release_date}</span> </address>

                <div className="font-bold mb-3"> Status: <span className='font-light'> {article.status} </span> </div>

                <div className="font-bold mb-3"> Genres: <span className='font-light'> {article.genres.map((genre) => (
                    <span key={genre.id}> {genre.name}, </span>
                ))} </span> </div>

                <div className="font-bold mb-3"> Homepage: <span className='font-light'> <a href={article.homepage} target="_blank" rel="noopener noreferrer">{article.homepage}</a> </span> </div>

            </div>

        </div>

    )
}

export async function getServerSideProps(context) {

    const responses = await axios.get(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${API_KEY}`)

    const article = await responses.data

    return {
        props: {
            article
        },
    }
}

// export async function getStaticPaths() {

//     const responses = await axios.get(`https://api.themoviedb.org/3/movie/766507?api_key=94ffd284358961ce14ea1ccfcc6e9b0a`)
//     const articles = await responses.data

//     const paths = articles.map((article) => ({
//         params: { id: article.id.toString() },
//     }))

//     // { fallback: false } means other routes should 404
//     return { paths, fallback: false }


// }

export default SingleMovie