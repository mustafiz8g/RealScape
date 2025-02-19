
import { Helmet } from 'react-helmet-async'
import Banner from '../Components/Home/Banner'
import Advertise from '../Components/Home/Advertise'
import Review from '../Components/Home/Review'
import Faq from '../Components/Home/Faq'
import Top from '../Components/Home/Top'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Real-Scape | Home </title>
      </Helmet>
   <Banner></Banner>
   <Advertise></Advertise>
   <Review></Review>
   <Faq></Faq>
   <Top></Top>
    </div>
  )
}

export default Home
