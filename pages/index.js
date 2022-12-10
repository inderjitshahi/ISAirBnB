import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'

export default function Home({ exploreData, liveData }) {
  // console.log(exploreData);
  return <div className='min-h-[200vh]'>
    <Head>
      <title>IS Airbnb</title>
    </Head>
    <Header />
    <Banner />
    <main className='max-w-7xl mx-auto px-8 sm:px-16'>
      <section className='p-6' >
        <h1 className='text-4xl font-semibold pb-5'>Explore Nearby</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4'>
          {exploreData.map((item) =>
            <SmallCard key={item.key} image={item.image} distance={item.distance} location={item.location} />
          )}
        </div>
      </section>

      <section>
        <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>

        <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-5'>
          {liveData.map(data =>
            <MediumCard key={Math.random()} image={data.image} title={data.title} />
          )}
        </div>
      </section>
      <LargeCard
        title=" The Greatest Outdoor"
        description="Wishlists curated By Airbnb"
        buttonText="Get Inspired"
      />
    </main>
    <Footer/>
  </div>
}


export async function getStaticProps() {
  //  const exploreData= await fetch('https://links.papareact.com/pyp').then(res=>res.json());
  const exploreData = [
    {
      key: 1,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "Delhi",
      distance: "30min Drive"
    },

    {
      key: 2,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "Lucknow",
      distance: "3hr Drive"
    },

    {
      key: 3,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "Mumbai",
      distance: "14hr Drive"
    },

    {
      key: 5,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "Mathura",
      distance: "1hr Drive"
    },

    {
      key: 6,
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      location: "surat",
      distance: "12hr Drive"
    },
  ]
  const liveData = [
    {
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Hello"
    },
    {
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Hello"
    },
    {
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Hello"
    },
    {
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Hello"
    },
  ]
  return {
    props: {
      exploreData,
      liveData
    }
  };
}