import Head from 'next/head'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import LargeCard from '../Components/LargeCard';
import MediumCard from '../Components/MediumCard';
import SmallCard from '../Components/SmallCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div className="">
      <Head>
        <title>AirBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header here */}
      <Header></Header>
      {/* Banner */}
      <Banner></Banner> 
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="Pt-6">
          <h2 className=" text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {exploreData?.map((item) => (
            <SmallCard 
            key={item.img}
            img={item.img}
            distance={item.distance}
            location={item.location}
            />
          ))
          }
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">
            Live Anywhere
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
          {cardsData?.map((item) => (
            <MediumCard
            key={item.img}
            img={item.img}
            title={item.title}
            />
            ))
          }
          </div>
        </section>

        <LargeCard img="https://links.papareact.com/4cj"
          title="The Greatest outdoors"
          description="Whishlists curated by Airbnb."
          buttonText="Get Inspired"        
        />
      </main>

      <Footer></Footer>
    </div>
  )
}

//for static rendering of data
//get data async and pass it as props for further use
export async function getStaticProps(){
  const exploreData = await fetch("https://links.papareact.com/pyp")
  .then(
    (res)=> res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1")
  .then(
    (res)=> res.json()
    );

  return{
    props:{
      exploreData,
      cardsData
    },
  };
  
}