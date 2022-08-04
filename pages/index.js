import Meta from '../components/Meta'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar'

function Home() {
  return (
    <div className='container m-auto'>
      
      <Meta title='Hulu 2.0 | Home' />

      {/* HEADER */}
      <Header />

      {/* NAVBAR */}
      <Navbar />

      {/* RESULTS */}

    </div>
  )
}

export default Home