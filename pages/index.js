import Meta from '../components/Meta'
import axios from 'axios'
import request from '../utils/request'
import Result from '../components/Result'

function Home({results}) {
  
  return (
    
    <div className='container m-auto px-5'>

      <Meta title='Hulu 2.0 | Home' />

      {/* RESULTS */}
      <Result results={results.results} />

    </div>
  )
}

export async function getServerSideProps(context) {

  const genre = context.query.genre

  const response = await axios.get(`https://api.themoviedb.org/3${request[genre]?.url || request.fetchTrending.url }`)
  const data = await response.data

  return {
    props: {
      results: data
    }, // will be passed to the page component as props
  }
}

export default Home