import React from 'react'
import axios from 'axios'

const API_KEY = process.env.API_KEY;

console.log(API_KEY);

const SingleMovie = () => {
    return (
        <div>SingleMovie</div>
    )
}

// export async function getStaticProps(context) {

//     const responses = await axios.get(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=94ffd284358961ce14ea1ccfcc6e9b0a&language=en-US`)
//     const article = await responses.data

//     return {
//         props: {
//             article
//         }, // will be passed to the page component as props
//     }
// }

// export async function getStaticPaths() {

//     const responses = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await responses.data

//     const paths = articles.map((article) => ({
//         params: { id: article.id.toString() },
//     }))

//     // { fallback: false } means other routes should 404
//     return { paths, fallback: false }


// }

export default SingleMovie