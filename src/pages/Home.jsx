import Banner from "../components/Banner/Banner"
import Hero from "../components/Hero/Hero"
import MissionVission from "../components/MissionVission/MissionVission"

const Home = () => {
  return (
    <main className="home">
        <Hero/>
        <MissionVission/>
        <Banner/>
    </main>
  )
}

export default Home