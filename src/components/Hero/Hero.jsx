import "./Hero.scss"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="hero">
        <h1 className="hero__title">Celebrating & Fostering Pride in the KW Region</h1>
        <Link to="/events" className="hero__button button">NEXT EVENT</Link>
    </section>
  )
}

export default Hero